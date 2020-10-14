import React from 'react';
import styles from './listReservas.module.css';
import ReservasCard from "../reservasCard/reservasCard.view";

const ListReservas = () => {

    return (
        <div className={styles.__contenedor}>
            <ReservasCard guest={'Marcos'} fechaLlegada={'1/7/2020'} fechaSalida={'20/7/2020'} precio={'300'}/>
            <ReservasCard guest={'Gustavo'} fechaLlegada={'5/9/2020'} fechaSalida={'28/10/2020'} precio={'200'}/>
            <ReservasCard guest={'Garcia'} fechaLlegada={'20/11/2020'} fechaSalida={'20/12/2020'} precio={'300'}/>
        </div>
    );
};

export default ListReservas;