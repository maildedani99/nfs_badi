import React from 'react';
import styles from './landing.module.css';

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
                    <a className={styles.__button} href="http://localhost:3000/loginpage">
                        {" "}Empieza ahora{" "}
                    </a>
                </div>
                <div className={styles.__contenedorEncontrarHabitacion}>
                    <span className={styles.__tituloPubHab}>Encuentra una<br/> habitación</span>
                    <span className={styles.__subTituloPubHab}>Escoge una ciudad y reserva <br/> tu habitación de forma segura.</span>
                    <a className={styles.__button} href="http://localhost:3000/habitaciones">
                        {" "}Busca ahora{" "}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;