import React, { useState, useEffect, useContext } from 'react';
import styles from './room_form.module.css';
import room_img from './room_img.png';
import UploadPhoto from '../../components/uploadphoto/uploadphotos';
import { UploadPhotoContext, uploadPhotoArray } from '../../contexts/uploadphoto_context';


const RoomForm = () => {

    const user = JSON.parse(localStorage.getItem('user'));
    const [features, setFeatures] = useState([]);
    const [next, setNext] = useState(true)

    const nextClick = () => {
        setNext(!next)
    }

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
            })
            .catch(error => console.log(error));
    }

    const [data, setData] = useState({})

    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
        console.log(data);
    }

    const [checkedList, setCheckList] = useState({});
    var checkedListArray = []
    var [filesArray, setFilesArray] = useState([]);

    const handleCheckBoxChange = (event) => {
        setCheckList({
            ...checkedList,
            [event.target.id]: event.target.checked,
        })
    }
    const handleFileChange = (event) => {
        setFilesArray([
            ...filesArray,
            [event.target.name] =  event.target.files[0].name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
        ])
        console.log(filesArray);
    }

    const selectTrue = () => {
        for (const property in checkedList) {
            if (checkedList[property] === true) {
                checkedListArray.push(property)
            }
        }
        setData({
            ...data,
            features: checkedListArray,
        })
        console.log("prueba array" + checkedListArray)
    }

    const submitForm = () => {
        setNext(false);
        selectTrue();
        const url = 'http://localhost/api/rooms';
        const body = {
            name: data.name,
            email: user.email,
            user_id: user.id,
            companions: data.companions,
            price: data.price,
            latitude: data.latitude,
            longitude: data.longitude,
            features: checkedListArray,
            description: data.description,
            images: filesArray
        };
        console.log(body);

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
                if (response.status === 201) {
                    console.log(response.status);
                    alert("Tu habitación: \n" + body.name + "\nse ha creado correctamente")
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

            { next ?

                <div className={styles.__form_container}>
                    <h2>Comparte tu habitación en Roomi</h2>
                    <h4 className={styles.__from_subtitle}>Información básica</h4>
                    <div>
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
                    </div>

                    <h4 className={styles.__from_subtitle}>Características</h4>
                    <div className={styles.__div_checkbox}>
                        {features.map((item) =>
                            <div className={styles.__checkbox_group}>
                                <input id={item.id} type="checkbox" className="check" onChange={handleCheckBoxChange} name={item.name} />
                                <label className={styles.__room_label}> {item.name} </label>
                            </div>
                        )}
                    </div>
                    <div className={styles.__div_button}>
                        <input className={styles.__button_crear} type="button" onClick={nextClick} name="button" value="Siguiente" />
                    </div>
                </div>

                :

                <div className={styles.__form_container}>
                    <h2>Comparte tu habitación en Roomi</h2>
                    <h4 className={styles.__from_subtitle}>Descripción</h4>
                    <div>
                        <div className={styles.__form_div}>
                            <textarea className={styles.__textarea} name="description" onInput={handleInputChange} />

                        </div>
                        <h4 className={styles.__from_subtitle}>Fotografías</h4>
                        <div className={styles.__div_inputs_foto}>

                        <UploadPhoto />
                      
                        </div>


                    </div>

                    <div className={styles.__div_button}>
                        <input className={styles.__button_crear} type="submit" onClick={submitForm} name="button" value="Crear anuncio" />
                    </div>
                </div>

            }

            <div className={styles.__div_img}>
                <img src={room_img} alt="image" />
            </div>

        </div>
    )


    /* <input className={styles.__button_crear} type="submit" onClick={submitForm} name="button" value="Crear anuncio" /> */

}
export default RoomForm;
