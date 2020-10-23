import React, {useEffect, useState} from 'react';
import styles from './reservesPage.module.css';
import {AuthContext} from "../../contexts/authentication/authentication.context";
import { Spin } from 'antd';
import ListSolicitudesDeReservas from "../../components/reserves/reservesHost/listSolicitudesDeReservas/listSolicitudesDeReservas.view";
import ListReservesGuest from "../../components/reserves/reservesGuest/listSolicitudesGuest/listReservesGuest.view";

const ReservesPage = () => {

    const { state } = React.useContext(AuthContext);
    const [solicitudesGuest, setSolicitudesGuest] = useState(null);
    const [closedGuest, setClosedGuest] = useState(null);
    const [solicitudes, setSolicitudes] = useState(null);
    const [concretadas, setConcretadas] = useState(null);

    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        const url = 'https://roomi-nuclio.herokuapp.com/api/reserves/solicitudes/' + state.user.id;
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

    useEffect(() => {
        const url = 'http://localhost/api/reserves/solicitudes/guest/' + state.user.id;
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
                    setSolicitudesGuest(payload);
                }
            )
            .catch(error => console.log(error));
    }, [refresh]);

    useEffect(() => {
        const url = 'http://localhost/api/reserves/closed/guest/' + state.user.id;
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
                    setClosedGuest(payload);
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
                    <></>
                }

                {solicitudes && state.user.role === 'HOST' ?
                    <ListSolicitudesDeReservas reserves={solicitudes} refreshList={() => {setRefresh(!refresh)}}/>
                :
                    <></>
                }

                {solicitudesGuest && state.user.role === 'GUEST' ?
                    <ListReservesGuest reservesGuest={solicitudesGuest} refreshList={() => {setRefresh(!refresh)}}/>
                    :
                    <></>
                }
            </div>

            <div className={styles.__reservasSolved}>
                <div className={styles.__div__titulo}>
                    <span className={styles.__titulo}> Mis reservas</span>
                </div>

                {solicitudes === null ?
                    <div className={styles.__spinner}>
                        <Spin />
                    </div>
                    :
                    <></>
                }

                {concretadas && state.user.role === 'HOST' ?
                    <ListSolicitudesDeReservas reserves={concretadas} refreshList={() => {setRefresh(!refresh)}}/>
                    :
                    <></>
                }

                {closedGuest && state.user.role === 'GUEST' ?
                    <ListReservesGuest reservesGuest={closedGuest} refreshList={() => {setRefresh(!refresh)}}/>
                    :
                    <></>
                }

            </div>

        </div>
    );
};

export default ReservesPage;