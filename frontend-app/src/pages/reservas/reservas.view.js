import React from 'react';
import styles from './reservas.module.css';
import ListReservas from "../../components/listReservas/listReservas.view";

const Reservas = () => {

    return (
        <div className={styles.__contenedor}>
            <div className={styles.__div__titulo}>
                <span className={styles.__titulo}>Mis solicitudes de reservas</span>
                <ListReservas />
            </div>

            <div className={styles.__div__titulo}>
                <span className={styles.__titulo}> Mis reservas</span>
                <ListReservas />
            </div>

        </div>
    );
};

export default Reservas;