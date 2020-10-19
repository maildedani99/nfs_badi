import React, {useState} from 'react';
import styles from './reservasGuest.module.css';
import {AuthContext} from "../../contexts/authentication/authentication.context";
import ListReservesSolved from "../../components/reserves/listReservesSolved/listReservesSolved.view";

const ReservasGuest = () => {

    const { state } = React.useContext(AuthContext);
    const [concretadas, setConcretadas] = useState('');

    return (
        <div className={styles.__reservasSolved}>
            <div className={styles.__div__titulo}>
                <span className={styles.__titulo}> Mis reservas</span>
            </div>
            <ListReservesSolved reservesSolved={}/>
        </div>
    );
};

export default ReservasGuest;