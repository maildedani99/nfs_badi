import React, {useEffect, useState} from 'react';
import styles from './rooms.module.css';
import ListRoom from "../../components/listRoom/listRoom.view";
import MapContainer from "../../components/roomsMap/roomsMap.view";

const RoomsPage = () => {

    const [rooms, setRooms] = useState('');

    useEffect(() => {
        const url = 'http://localhost/api/rooms/';
        const options = {
            method: 'GET',
            headers: new Headers(),
        };

        fetch(url, options)
            .then(response => {
                    if (response.status === 200) {
                        return response.json();
                    }
                    return Promise.reject(response.status);
                }
            )
            .then(payload => {
                    console.log("List rooms saved");
                    setRooms(payload);
                }
            )
            .catch(error => console.log(error));
    }, []);

    return (
        <div className={styles.__contenedor}>
            <div className={styles.__contenedorListRoom}>
                <ListRoom rooms={rooms}/>
            </div>
            <div className={styles.__contenedorMapContainer}>
                <MapContainer rooms={rooms}/>
            </div>
        </div>
    )
}

export default RoomsPage;