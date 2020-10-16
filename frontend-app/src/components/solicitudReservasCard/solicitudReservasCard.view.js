import React from 'react';
import styles from './solicitudReservasCard.module.css';
import avatar from './assets/avatar.png'
import {useHistory} from "react-router-dom";
import {RESERVAS} from "../../routes/routes";

const SolicitudReservasCard = ({room, guest, fechaLlegada, fechaSalida, precio, id}) => {

    const history = useHistory();

    const Aceptar = () => {
        const url = 'http://localhost/api/reserves/' + id;
        const body = {
            status: 'aceptada',
        };

        const options = {
            method: 'PUT',
            headers: new Headers({
                'Content-type': 'application/json',
            }),
            mode: 'cors',
            body: JSON.stringify(body),
        };

        fetch(url, options)
            .then(response => {
                if (response.status === 201) {
                    return response.json();
                }
                return Promise.reject(response.status);
            })
            .then()
            .catch(error => console.log(error));
    }

    const Rechazar = () => {
        const url = 'http://localhost/api/reserves/' + id;
        const body = {
            status: 'rechazada',
        };

        const options = {
            method: 'PUT',
            headers: new Headers({
                'Content-type': 'application/json',
            }),
            mode: 'cors',
            body: JSON.stringify(body),
        };

        fetch(url, options)
            .then(response => {
                if (response.status === 201) {
                    return response.json();
                }
                return Promise.reject(response.status);
            })
            .then()
            .catch(error => console.log(error));
    }

    return (
        <div className={styles.__contenedor}>
            <span className={styles.__habitacion}>{room}</span>

            <div className={styles.__infoCard}>
                <img className={styles.__img} src={avatar}/>
                <span className={styles.__nombre}>{guest}</span>

                <div className={styles.__contenedorFechas}>
                    <span className={styles.__Nombrefecha}>Desde: <span className={styles.__fecha}>{fechaLlegada}</span></span>
                    <span className={styles.__Nombrefecha}>Hasta: <span className={styles.__fecha}>{fechaSalida}</span></span>
                </div>

                <span className={styles.__fecha}>€ {precio}</span>
                <span className={styles.__botonAceptar} onClick={Aceptar}>Aceptar</span>
                <span className={styles.__botonRechazar} onClick={Rechazar}>Rechazar</span>
            </div>
        </div>
    );
};

export default SolicitudReservasCard;