import React from 'react';
import styles from './landing.module.css';
import Navbar from '../../components/navbar/navbar'

const LandingPage = () => {

    return (
        <>
        <Navbar search="present" register="present" login="present" publicRoom="present"/>
        <div className={styles.__contenedor}>
            <span className={styles.__titulo}>Reserva tu habitación <br/> con seguridad</span>
            <span className={styles.__subtitulo}>Más de <strong>2 millones</strong> de personas ya confían en Room. ¡Únete!</span>
            <div className={styles.__contenedorPublicarHabitacion}>
                <span className={styles.__tituloPubHab}>Publica tu <br/> habitación</span>
                <span className={styles.__subTituloPubHab}>Encuentra al inquilino ideal al <br/> instante.</span>
                <span className={styles.__button}>Empieza ahora</span>
            </div>

            </div>
            </>
    )
}

export default LandingPage;