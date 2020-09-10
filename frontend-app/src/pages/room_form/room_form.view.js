import React, { useState, useEffect } from 'react';
import styles from './room_form.module.css';
import Navbar from '../../components/navbar/navbar';
import room_img from './room_img.png';
import CheckBox from '../../components/checkbox/checkbox';
import CheckboxFeaturesContainer from '../../components/checkbox/checkbox';


const RoomForm = () => {


    const [data, setData] = useState({
        name: '',
        email: '',
        user_id: '',
        companions: '',
        price: '',
        longitude: '',
        latitude: ''
    })

    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }
    
    
    const SubmitForm = () => {
        const url = 'http://localhost/api/rooms';
        const body = {
            name: data.name,
            email: data.email,
            user_id: data.user_id,
            companions: data.companions,
            price: data.price,
            latitude: data.latitude,
            longitude: data.longitude,
        };
        const options = {
            method: 'POST',
            headers: new Headers({
                'Content-type': 'application/json',
            }),
            mode: 'cors',
            body: JSON.stringify(body),
        };
        
        fetch(url, options)
        .then(response => {
            if (response.status === 200) {
                console.log(response.status);
                return response.json();
            }
            return Promise.reject(response.status);
        })
                                
        .catch(error => console.log(error));
    };


return (
    
    <div className={styles.__room_container}>
            <div className={styles.__form_container}>
                <h2>Comparte tu habitación en Room</h2>
                <h4 className={styles.__from_subtitle}>Información básica</h4>
                <div className={styles.__form_div}>
                    <input className={styles.__input_habitacion} type="text" name="name" onChange={handleInputChange} placeholder="Nombre de la habitación" />
                    <input className={styles.__input_compañeros} type="text" name="companions" onChange={handleInputChange} placeholder="Compañeros" />
                    <input className={styles.__input_precio} type="text" name="price" onChange={handleInputChange} placeholder="Precio" />
                </div>
                <h4 className={styles.__from_subtitle}>Ubicación</h4>
                <div className={styles.__ubicacion_div}>
                    <input className={styles.__input_ubicacion} type="text" name="latitude" onChange={handleInputChange} placeholder="Latitud" />
                    <input className={styles.__input_ubicacion} type="text" name="longitude" onChange={handleInputChange} placeholder="Longitud" />
                </div>

                <h4 className={styles.__from_subtitle}>Características</h4>
                <div className={styles.__checkbox}>
                    <div className={styles.__div_checkbox}>
                        <CheckboxFeaturesContainer />
                    </div>

                    
                        
              
            </div>
            <div className={styles.__div_button}>
                <input className={styles.__button_crear} type="submit" onClick={SubmitForm} name="button" value="Crear anuncio" />
            </div>
        </div>
        <div className={styles.__div_img}>
            <img src={room_img} alt="image" />
        </div>
        </div>

    )
}
export default RoomForm;
