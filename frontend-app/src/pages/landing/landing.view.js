import React from 'react';
import styles from './landing.module.css';
import {HABITACIONES, LOGINPAGE} from "../../routes/routes";
import {Link} from "react-router-dom";
import ListRoom from "../../components/listRoom/listRoom.view";

const LandingPage = () => {

    return (
        <div>
            <div className={styles.__contenedor}>
                <div className={styles.__contenedorMain}>
                    <div className={styles.__contenedorTitulo}>
                        <span className={styles.__titulo}>Encuentra tu habitación perfecta</span>
                        <span className={styles.__subtitulo}>Con Room la habitación de tus sueños esta más <br/>cerca!</span>
                        <Link className={styles.__button} to={HABITACIONES}>
                            Ver habitaciones
                        </Link>
                    </div>
                    <div className={styles.__contenedorImagen}>
                        <img className={styles.__imagen} src={"https://images.cmft.io/1200270192509325312/1229295455456862208/1229295455482028032/Screenshot_2020-06-25_at_14.07.30.png?w=840&h=400&fit=crop"}/>
                    </div>
                </div>
            </div>

            <div className={styles.__contenedorRooms}>
                <span className={styles.__tituloRooms}>Tenemos habitaciones como estas!</span>
                <span className={styles.__subTituloRooms}>Espacios con encanto preparados para ti</span>

                <div className={styles.__contenedorListRooms}>
                    <ListRoom/>
                </div>
            </div>

        </div>
    )
}

export default LandingPage;
