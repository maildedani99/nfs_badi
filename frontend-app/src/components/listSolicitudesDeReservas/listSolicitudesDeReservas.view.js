import React from 'react';
import styles from './listSolicitudesDeReservas.module.css';
import SolicitudReservasCard from "../solicitudReservasCard/solicitudReservasCard.view";

const ListSolicitudesDeReservas = ({reserves}) => {

    return (
        <div className={styles.__contenedor}>
            {reserves.length === 0 ?
                <span>No tienes ninguna solicitud de reserva por el momento.</span>
                :
                <div>
                {reserves && reserves.map(reserve => {
                    return (
                        <SolicitudReservasCard
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