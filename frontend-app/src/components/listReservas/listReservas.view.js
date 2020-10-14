import React, {useEffect, useState} from 'react';
import styles from './listReservas.module.css';
import ReservasCard from "../reservasCard/reservasCard.view";
import RoomCard from "../roomCard/roomCard.view";

const ListReservas = () => {

    const [reserves, setReserves] = useState('');

    useEffect(() => {
        const url = 'http://localhost/api/reserves/';
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
    );
};

export default ListReservas;