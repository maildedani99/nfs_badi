import React from 'react';
import styles from './rooms.module.css';
import ListRoom from "../../components/listRoom/listRoom.view";

const RoomsPage = () => {

    return (
        <div className={styles.__contenedor}>
            <div className={styles.__contenedorListRoom}>
                <ListRoom/>
            </div>
            <img className={styles.__mapa} src='https://www.google.com/maps/d/thumbnail?mid=1yWrAUAXe7fMNFYQa8mpJQ4HWlqU&hl=es'/>
        </div>
    )
}

export default RoomsPage;