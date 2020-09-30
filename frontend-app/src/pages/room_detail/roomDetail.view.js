import React from 'react';
import styles from './roomDetail.module.css';
import Footer from "../../components/footer/footer.view";
import {MapContainer} from "../../components/roomsMap/roomsMap.view";
import MapContainerDetalle from "../../components/roomDetailMap/roomDetailMap.view";

const RoomDetail = () => {

    return (
        <div>
            <div className={styles.__container}>
                <div className={styles.__galeria}>

                </div>

                <div className={styles.__containerMain}>
                    <div className={styles.__detalleRoom}>
                        <span className={styles.__nombre}>Mi Habitacion</span>
                        <span className={styles.__companeros}>5 compañeros</span>
                        <span className={styles.__titulo}>Información básica</span>
                        <p className={styles.__descripcion}>Habitación ubicada a pocos metros de Glorias y Bac de Roda. Habitación doble con balcón. En el piso viven un chico y una chica de 26 años, ambos muy simpáticos y trabajadores. Cerca de la vivienda tienes todo tipo de comercios (Lidl, Mercadona, Bonpreu, Supercor...) y varias vías de transporte público (Metro L1 y L2, buses, tram y bicing). El piso se encuentra a 20 minutos caminando de la playa.</p>
                        <span className={styles.__titulo}>Precio y condiciones</span>
                        <span className={styles.__precio}>300 €/mes</span>
                        <span className={styles.__titulo}>Servicios</span>
                    </div>

                    <div className={styles.__calendario}>
                        <span className={styles.__tituloCalendario}>Añade las fechas para reservar la habitación</span>
                        <span>FECHAS</span>
                        <div className={styles.__botonReservar}>Reservar</div>
                    </div>
                </div>

                <div className={styles.__mapContainer}>
                    <MapContainerDetalle/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default RoomDetail;