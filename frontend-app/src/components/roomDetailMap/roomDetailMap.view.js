import React,{useState} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import iconoMapa from './iconoMapaDetalle.png';

export const MapContainerDetalle = ({google, data}) => {

    const [state, setState] = useState({
        activeMarker:{},
        selectedPlace: {},
        showingInfoWindow: false,
    });

    if (!data) {
        return(<div>

        </div>);
    }

    const room = {
        name: data.name,
        id: data.id,
        price: data.price,
        latitude: data.latitude,
        longitude: data.longitude
    }

    const onClick = () => {
        if(state.showingInfoWindow){
            setState({
                activeMarker: null,
                showingInfoWindow: false,
            });
        }
    };

    const onInfoWindowClose = () => {

    };

    const onMarkerClick = (props, marker) =>{
        setState({
            activeMarker: marker,
            selectedPlace: props,
            showingInfoWindow: true,
        });
    };

    const containerStyle = {
        position: 'relative',
        width: '100%',
        height: '390px'
    }

    return (
        <>
            <Map google={google}
                 onClick={onClick}
                 containerStyle={containerStyle}
                 zoom={16}
                 initialCenter={{lat:room.latitude,lng:room.longitude}}>

                <Marker onClick={onMarkerClick} icon={iconoMapa} name={room.name} id={room.id} price={room.price} position={{lat:room.latitude,lng:room.longitude}} />

                <InfoWindow marker={state.activeMarker} visible={state.showingInfoWindow} onClose={onInfoWindowClose}>
                    <div>
                        <span>{state.selectedPlace && state.selectedPlace.name}</span><br/>
                        <span>{state.selectedPlace && state.selectedPlace.price}€</span>
                    </div>
                </InfoWindow>
            </Map>
            <div />
        </>
    );
};

export default GoogleApiWrapper({
    apiKey: 'API KEY'
})(MapContainerDetalle);