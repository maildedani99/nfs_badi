import React from 'react';
import styles from './listReservesGuest.module.css';
import ReserveCard from "../../reserveCard/reserveCard.view";


const ListReservesGuest = ({reservesGuest, refreshList}) => {

    return(
        <div className={styles.__contenedor}>
            {reservesGuest.length === 0 ?
                <span>No tienes ninguna reserva por el momento.</span>
                :
                <div>
                    {reservesGuest && reservesGuest.map(reserve => {
                            return (
                                <ReserveCard
                                    room={reserve.room.name}
                                    guest ={reserve.host.first_name}
                                    fechaLlegada={reserve.arrival}
                                    fechaSalida={reserve.departure}
                                    precio={reserve.price}
                                    status={reserve.status}
                                    key={reserve.id}
                                    refreshList={refreshList}
                                />
                            );
                        }
                    )}
                </div>
            }

        </div>
    );
};

export default ListReservesGuest;