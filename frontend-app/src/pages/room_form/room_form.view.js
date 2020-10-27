import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './room_form.module.css';
import room_img from './assets/room_img.png';
import UploadPhoto from '../../components/uploadphoto/uploadphotos';
import { UploadPhotoContext } from '../../contexts/uploadphoto_context';
import {AuthContext} from "../../contexts/authentication/authentication.context";
import {CONECTION_API, LANDING} from "../../routes/routes";
import swal from 'sweetalert';


const RoomForm = () => {

    const { state } = React.useContext(AuthContext);
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem('user'));
    const [features, setFeatures] = useState([]);
    const [next, setNext] = useState(true);
    const { uploadPhotoArray } = useContext(UploadPhotoContext);

    const nextClick = () => {
        setNext(!next)
    }

    if(state.user.role === 'GUEST') {
        history.replace(LANDING);
    }

    const checkboxFetch = () => {
        const url = CONECTION_API + 'features';
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
    }

    const [checkedList, setCheckList] = useState({});
    var checkedListArray = []

    const handleCheckBoxChange = (event) => {
        setCheckList({
            ...checkedList,
            [event.target.id]: event.target.checked,
        })
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
    }

    const submitForm = () => {
        setNext(false);
        selectTrue();

        const url = CONECTION_API + 'rooms';
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
            images: uploadPhotoArray,
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
                    swal(body.name, "Tu habitación ha sido creada con éxito", "success");
                    return response.json();
                } else {
                    swal("Error al crear habitación","Revisa tu formulario", "error");
                    return Promise.reject(response.status);
                }
            })
            .catch(error =>console.log(error));
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
                            <textarea className={styles.__textarea} name="description" placeholder="Describe tu habitación con mucho detalle!"  onInput={handleInputChange} />

                        </div>
                        <h4 className={styles.__from_subtitle}>Fotografías</h4>
                        <div className={styles.__div_inputs_foto}>
                            <UploadPhoto name="image1" />
                            <UploadPhoto name="image2" />
                            <UploadPhoto name="image3" />
                            <UploadPhoto name="image4" />
                            <UploadPhoto name="image5" />
                            <UploadPhoto name="image6"/>
                        </div>
                    </div>

                    <div className={styles.__div_button}>
                        <input className={styles.__button_crear} type="button" onClick={nextClick} name="button" value="<<" />
                        <input className={styles.__button_crear} type="submit" onClick={submitForm} name="button" value="Crear anuncio" />
                    </div>
                </div>

            }

            <div className={styles.__div_img}>
                <img className={styles.__img} src={room_img} alt="image" />
            </div>

        </div>
    )
}

export default RoomForm;
