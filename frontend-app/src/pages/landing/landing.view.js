import React from 'react';
import styles from './landing.module.css';
import { HABITACIONES, LOGINPAGE } from '../../routes/routes';
import { Link } from 'react-router-dom';
import RecommendedRooms from '../../components/recommendedRooms/recommendedRooms.view';
import imgMainLanding from './assets/imgMainLanding.png';
import Footer from '../../components/footer/footer.view';

const LandingPage = () => {
    return (
        <div>
            <div className={styles.__contenedor}>
                <div className={styles.__contenedorMain}>
                    <div className={styles.__contenedorTitulo}>
                        <span className={styles.__titulo}>Encuentra tu habitación perfecta</span>
                            <span className={styles.__subtitulo}>
                                Con Room la habitación de tus sueños esta más cerca!
                            </span>
                            <Link className={styles.__button} to={HABITACIONES}>
                                Ver habitaciones
                            </Link>
                    </div>
                    <div className={styles.__contenedorImagen}>
                        <img className={styles.__imagen} src={imgMainLanding} />
                    </div>
                </div>
            </div>

            <div className={styles.__contenedorRooms}>
                <span className={styles.__tituloRooms}>Tenemos habitaciones como estas!</span>
                <span className={styles.__subTituloRooms}>
                    Espacios con encanto preparados para ti
                </span>

                <div className={styles.__contenedorListRooms}>
                    <RecommendedRooms />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default LandingPage;
