import React from 'react';
import styles from './reservas.module.css';
import ListSolicitudesDeReservas from "../../components/listSolicitudesDeReservas/listSolicitudesDeReservas.view";

const Reservas = () => {

    return (
        <div className={styles.__contenedor}>
            <div>
                <ListSolicitudesDeReservas/>
            </div>

            <div className={styles.__div__titulo}>
                <span className={styles.__titulo}> Mis reservas</span>
            </div>
        </div>
    );
};

export default Reservas;