import React from 'react';
import styles from './reservasCard.module.css';
import avatar from './assets/avatar.png'

const ReservasCard = ({guest, fechaLlegada, fechaSalida, precio}) => {


    return (
        <div className={styles.__contenedor}>
            <img className={styles.__img} src={avatar}/>
            <span className={styles.__nombre}>{guest}</span>

            <div className={styles.__contenedorFechas}>
                <span className={styles.__Nombrefecha}>Desde: <span className={styles.__fecha}>{fechaLlegada}</span></span>
                <span className={styles.__Nombrefecha}>Hasta: <span className={styles.__fecha}>{fechaSalida}</span></span>
            </div>

            <span className={styles.__fecha}>€ {precio}</span>
            <span className={styles.__botonAceptar}>Aceptar</span>
            <span className={styles.__botonRechazar}>Rechazar</span>
        </div>
    );
};

export default ReservasCard;