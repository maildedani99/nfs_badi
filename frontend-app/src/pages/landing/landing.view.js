import React from 'react';
import styles from './landing.module.css';
import {HABITACIONES, LOGINPAGE} from "../../routes/routes";
import {Link} from "react-router-dom";

const LandingPage = () => {

    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    }
    return (
        <div className={styles.__contenedor}>
            <span className={styles.__titulo}>Reserva tu habitación <br/> con seguridad</span>
            <span className={styles.__subtitulo}>Más de <strong>2 millones</strong> de personas ya confían en Room. ¡Únete!</span>
            <div className={styles.__contenedorMain}>
                <div className={styles.__contenedorPublicarHabitacion}>
                    <span className={styles.__tituloPubHab}>Publica tu <br/> habitación</span>
                    <span className={styles.__subTituloPubHab}>Encuentra al inquilino ideal al <br/> instante.</span>
                    <Link className={styles.__button} to={LOGINPAGE}>
                        Empieza ahora
                    </Link>
                </div>
                <div className={styles.__contenedorEncontrarHabitacion}>
                    <span className={styles.__tituloPubHab}>Encuentra una<br/> habitación</span>
                    <span className={styles.__subTituloPubHab}>Escoge una ciudad y reserva <br/> tu habitación de forma segura.</span>
                    <Link className={styles.__button} to={HABITACIONES}>
                        Busca ahora
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;