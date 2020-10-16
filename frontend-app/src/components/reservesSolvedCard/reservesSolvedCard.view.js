import React from 'react';
import styles from './reservesSolvedCard.module.css';
import avatar from "./assets/avatar.png";
import aceptadaImg from './assets/aceptada.png';
import rechazadaImg from './assets/rechazada.png'

const ReservesSolved = ({room, guest, fechaLlegada, fechaSalida, precio, status}) => {


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
                <span className={styles.__status}>
                    {status === 'aceptada' ? <img src={aceptadaImg}/> : <img src={rechazadaImg}/>}
                </span>
            </div>
        </div>
    );
};

export default ReservesSolved;