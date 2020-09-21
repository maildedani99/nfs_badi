import React, { useState, useEffect } from 'react';
import styles from './room_form.module.css';
import room_img from './room_img.png';


const RoomForm = () => {

    const [features, setFeatures] = useState([]);

    const checkboxFetch = () => {
        const url = 'http://localhost/api/features';
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
            })
            .then(function (myJson) {
                setFeatures(myJson);
                console.log(myJson);
            })
            .catch(error => console.log(error));
    }


    var checkedList = [];

    const checkboxResults = () => {
        var checkboxes = document.getElementsByClassName("check");
        for (var i = 0; i < features.length; i++) {
            if (checkboxes[i].checked) {
                checkedList.push(checkboxes[i].id);
                console.log(checkboxes[i].id)
            }
        }
      setData({
          ...data,
          features : checkedList,
        
      })
        console.log(data)
    }

    const [data, setData] = useState({})

    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const submitForm = () => {  

        checkboxResults();

        const url = 'http://localhost/api/rooms';
        const body = {
            name: data.name,
            email: data.email,
            user_id: data.user_id,
            companions: data.companions,
            price: data.price,
            latitude: data.latitude,
            longitude: data.longitude,
            features: data.features,
        };

        const options = {
            method: 'POST',
            headers: new Headers({
                'Content-type': 'application/json',
            }),
            mode: 'cors',
            body: JSON.stringify(body),
        };
        console.log(data)
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

    useEffect(() => {
        checkboxFetch()
    }, [])

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
                <div className={styles.__div_checkbox}>
                    {features.map((item) =>
                        <div className={styles.__checkbox_group}>
                            <input id={item.id} type="checkbox" className="check" onChange={event => console.log(event.target.id, event.target.checked) } name={item.name} />
                            <label className={styles.__room_label}> {item.name} </label>
                        </div>
                    )}
                </div>
                <div className={styles.__div_button}>
                    <input className={styles.__button_crear} type="submit" onClick={submitForm} name="button" value="Crear anuncio" />
                </div>
            </div>
            <div className={styles.__div_img}>
                <img src={room_img} alt="image" />
            </div>
        </div>

    )
}
export default RoomForm;
