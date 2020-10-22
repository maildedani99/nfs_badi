import React from 'react';
import styles from './comentarios.module.css'
import comentariosImg from './assets/comentariosImg.png'

const Comentarios = () => {

    return (
        <div className={styles.__seccionComentarios}>
            <span className={styles.__subTitulo}>2 evaluaciones</span>

            <div className={styles.__comentarios}>
                <img src={comentariosImg} className={styles.__imgComentario}/>
                <div className={styles.__infoComentarios}>
                    <span className={styles.__nombreComentario}>Han Solo</span>
                    <p className={styles.__parrafoComentario}>We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.</p>
                </div>
            </div>

            <div className={styles.__comentarios}>
                <img src={comentariosImg} className={styles.__imgComentario}/>
                <div className={styles.__infoComentarios}>
                    <span className={styles.__nombreComentario}>Han Solo</span>
                    <p className={styles.__parrafoComentario}>We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.</p>
                </div>
            </div>

        </div>
    );
};

export default Comentarios;