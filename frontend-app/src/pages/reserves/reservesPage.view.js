import React, {useEffect, useState} from 'react';
import styles from './reservesPage.module.css';
import {AuthContext} from "../../contexts/authentication/authentication.context";
import { Spin } from 'antd';
import ListSolicitudesDeReservas from "../../components/reserves/listSolicitudesDeReservas/listSolicitudesDeReservas.view";
import ListReservesSolved from "../../components/reserves/listReservesSolved/listReservesSolved.view";

const ReservesPage = () => {

    const { state } = React.useContext(AuthContext);
    const [solicitudes, setSolicitudes] = useState(null);
    const [concretadas, setConcretadas] = useState(null);

    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        const url = 'http://localhost/api/reserves/solicitudes/' + state.user.id;
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
                }
            )
            .then(payload => {
                    setSolicitudes(payload);
                }
            )
            .catch(error => console.log(error));
    }, [refresh]);

    useEffect(() => {
        const url = 'http://localhost/api/reserves/closed/' + state.user.id;
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
                }
            )
            .then(payload => {
                    setConcretadas(payload);
                }
            )
            .catch(error => console.log(error));
    }, [refresh]);

    return (
        <div className={styles.__contenedor}>

            <div>
                <div className={styles.__div__titulo}>
                    <span className={styles.__titulo}>Mis solicitudes de reservas</span>
                </div>
                {solicitudes === null ?
                    <div className={styles.__spinner}>
                        <Spin />
                    </div>
                    :
                    <ListSolicitudesDeReservas reserves={solicitudes} refreshList={() => {setRefresh(!refresh)}}/>
                }
            </div>

            <div className={styles.__reservasSolved}>
                <div className={styles.__div__titulo}>
                    <span className={styles.__titulo}> Mis reservas</span>
                </div>
                {concretadas === null ?
                    <div className={styles.__spinner}>
                        <Spin />
                    </div>
                    :
                    <ListReservesSolved reservesSolved={concretadas} refreshList={() => {setRefresh(!refresh)}}/>
                }
            </div>

        </div>
    );
};

export default ReservesPage;