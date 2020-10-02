import React from 'react';
import {Link} from "react-router-dom";
import styles from "./roomCard.module.css";
import {ROOMDET} from "../../routes/routes";

const RoomCard = ({name, price, id}) => {

    function handleClick() {
        console.log(id);
    }

    return (
        <Link to={ROOMDET+id}>
          <div className={styles.__contenedorRoomCard} onClick={handleClick}>
              <img className={styles.__galeria} src='https://www.metropoliabierta.com/uploads/s1/76/18/0/Foto%20Habitacio%CC%81n_5_570x340.jpeg' alt='Room in Barcelona'/>
              <span className={styles.__nombre}>Marcos, 27</span>
              <span className={styles.__titulo}>{name}</span>
              <span className={styles.__precio}>{price} €/mes</span>
          </div>
        </Link>
    );
}

export default RoomCard;