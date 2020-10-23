import React from 'react';
import styles from './listSolicitudesDeReservas.module.css';
import ReserveCard from "../../reserveCard/reserveCard.view";

const ListSolicitudesDeReservas = ({reserves, refreshList}) => {

    return (
        <div className={styles.__contenedor}>
            {reserves.length === 0 ?
                <span>No tienes ninguna solicitud de reserva por el momento.</span>
                :
                <div>
                    {reserves && reserves.map(reserve => {
                        return (
                            <ReserveCard
                                room={reserve.room.name}
                                guest={reserve.guest.first_name}
                                fechaLlegada={reserve.arrival}
                                fechaSalida={reserve.departure}
                                precio={reserve.price}
                                id={reserve.id}
                                status={reserve.status}
                                key={reserve.id}
                                refreshList={refreshList}
                            />
                        );
                    })}
                </div>
            }
        </div>
    );
};

export default ListSolicitudesDeReservas;