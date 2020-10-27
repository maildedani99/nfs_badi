import React from 'react';
import styles from './reserveCard.module.css';
import {AuthContext} from "../../../contexts/authentication/authentication.context";
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import avatar from "./assets/avatar.png";
import pendienteImg from './assets/pendiente.png';
import aceptadaImg from './assets/aceptada.png';
import rechazadaImg from './assets/rechazada.png';
import enCursoImg from './assets/en_curso.png';
import completadaImg from './assets/completada.png';
import {CONECTION_API} from "../../../routes/routes";

const ReserveCard = ({room, guest, fechaLlegada, fechaSalida, precio, id, status, refreshList}) => {

    const { state } = React.useContext(AuthContext);
    const arrival = format(new Date(fechaLlegada), "dd' 'MMM' 'yyyy");
    const departure = format(new Date(fechaSalida), "dd' 'MMM' 'yyyy");

    const respuesta = (accion) => () => {

        const url = CONECTION_API + 'reserves/' + id;
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

    const renderStatusHost = (statusReserve) => {
        switch (statusReserve){
            case 'PENDIENTE':
                if (state.user.role === 'HOST') {
                    return (
                        <div className={styles.__div_botones}>
                            <span className={styles.__botonAceptar} onClick={respuesta('ACEPTADA')}>Aceptar</span>
                            <span className={styles.__botonRechazar} onClick={respuesta('RECHAZADA')}>Rechazar</span>
                        </div>
                    );
                } else {
                    return ( <img src={pendienteImg}/> );
                }
            case 'ACEPTADA':
                return ( <img src={aceptadaImg}/> );
            case 'RECHAZADA':
                return ( <img src={rechazadaImg}/> );
            case 'EN_CURSO':
                return ( <img src={enCursoImg}/> );
            case 'COMPLETADA':
                return ( <img src={completadaImg}/> );
            }
    }

    return (
        <div className={styles.__contenedor}>
            <span className={styles.__habitacion}>{room}</span>

            <div className={styles.__infoCard}>
                <img className={styles.__img} src={avatar}/>
                <span className={styles.__nombre}>{guest}</span>

                <div className={styles.__contenedorFechas}>
                    <span className={styles.__Nombrefecha}>Desde: <span className={styles.__fecha}> {arrival}</span></span>
                    <span className={styles.__Nombrefecha}>Hasta: <span className={styles.__fecha}> {departure}</span></span>
                </div>

                <span className={styles.__fecha}>
                    <span className={styles.__Nombrefecha}>{precio}€/</span>
                    mes
                </span>
                <div className={styles.__status}>
                    {renderStatusHost(status)}
                </div>
            </div>
        </div>
    );
}

export default ReserveCard;