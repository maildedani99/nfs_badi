import React, {useEffect, useState} from 'react';
import styles from './reservasHost.module.css';
import {AuthContext} from "../../contexts/authentication/authentication.context";
import ListSolicitudesDeReservas from "../../components/reserves/listSolicitudesDeReservas/listSolicitudesDeReservas.view";
import ListReservesSolved from "../../components/reserves/listReservesSolved/listReservesSolved.view";

const ReservasHost = () => {

    const { state } = React.useContext(AuthContext);
    const [solicitudes, setSolicitudes] = useState('');
    const [concretadas, setConcretadas] = useState('');

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
                <ListSolicitudesDeReservas reserves={solicitudes} refreshList={() => {setRefresh(!refresh)}}/>
            </div>

            <div className={styles.__reservasSolved}>
                <div className={styles.__div__titulo}>
                    <span className={styles.__titulo}> Mis reservas</span>
                </div>
                <ListReservesSolved reservesSolved={concretadas} refreshList={() => {setRefresh(!refresh)}}/>
            </div>
        </div>
    );
};

export default ReservasHost;