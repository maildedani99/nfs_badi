import React from 'react';
import styles from './listReservesSolved.module.css';
import ReserveCard from "../../reserveCard/reserveCard.view";

const ListReservesSolved = ({reservesSolved, refreshList}) => {

    return(
        <div className={styles.__contenedor}>
            {reservesSolved.length === 0 ?
                <span>No tienes ninguna reserva concretada por el momento.</span>
                :
                <div>
                    {reservesSolved && reservesSolved.map(reserve => {
                            return (
                                <ReserveCard
                                    room={reserve.room.name}
                                    guest ={reserve.guest.first_name}
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

export default ListReservesSolved;