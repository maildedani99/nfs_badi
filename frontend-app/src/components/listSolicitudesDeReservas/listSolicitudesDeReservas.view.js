import React, {useEffect, useState} from 'react';
import styles from './listSolicitudesDeReservas.module.css';
import ReservasCard from "../reservasCard/reservasCard.view";
import {AuthContext} from "../../contexts/authentication/authentication.context";

const ListSolicitudesDeReservas = () => {

    const [reserves, setReserves] = useState('');
    const { state } = React.useContext(AuthContext);

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
                    setReserves(payload);
                }
            )
            .catch(error => console.log(error));
    }, []);


    return (
        <div className={styles.__contenedor}>
            <div className={styles.__div__titulo}>
                <span className={styles.__titulo}>Mis solicitudes de reservas</span>
            </div>

            {reserves.length === 0 ?
                <span>No tienes ninguna solicitud de reserva por el momento</span>
                :
                <div>
                {reserves && reserves.map(reserve => {
                    return (
                        <ReservasCard
                            room={reserve.room.name}
                            guest ='Marcos'
                            fechaLlegada={reserve.arrival}
                            fechaSalida={reserve.departure}
                            precio={reserve.price}
                            key={reserve.id}
                        />
                    );
                }
                )}
                </div>
            }

        </div>
    );
};

export default ListSolicitudesDeReservas;