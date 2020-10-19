import React from 'react';
import styles from './solicitudReservasCard.module.css';
import avatar from './assets/avatar.png'
import {useHistory} from "react-router-dom";
import {RESERVAS} from "../../../routes/routes";

const SolicitudReservasCard = ({room, guest, fechaLlegada, fechaSalida, precio, id, refreshList}) => {

    const history = useHistory();
    const respuesta = (accion) => () => {

        const url = 'http://localhost/api/reserves/' + id;
        const body = {
            status: accion,
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
                refreshList()
                if (response.status === 201) {
                    return response.json();
                }
                return Promise.reject(response.status);
            })
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
                <div className={styles.__div_botones}>
                    <span className={styles.__botonAceptar} onClick={respuesta('aceptada')}>Aceptar</span>
                    <span className={styles.__botonRechazar} onClick={respuesta('rechazar')}>Rechazar</span>
                </div>
            </div>
        </div>
    );
};

export default SolicitudReservasCard;