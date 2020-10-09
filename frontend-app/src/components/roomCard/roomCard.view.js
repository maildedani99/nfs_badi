import React from 'react';
import {Link} from "react-router-dom";
import styles from "./roomCard.module.css";
import {ROOMDETAILBYID} from "../../routes/routes";
import companionsImg from './assets/companionsImg.png';

const RoomCard = ({name, price, id, user, companions, images}) => {

    function handleClick() {
        console.log(id);
    }

    return (
        <Link to={ROOMDETAILBYID+id}>
          <div className={styles.__contenedorRoomCard} onClick={handleClick}>
              {images && images.map((image,i) => {
                      if(i==0){
                          return (
                              <img key={image.id} className={styles.__galeria} src={image.image_url} alt='Room in Barcelona'/>
                          );
                      }
                  }
              )}

              {images === undefined || images.length ===0 &&
              <img className={styles.__galeria} src='https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101027/112815900-stock-vector-no-image-available-icon-flat-vector.jpg?ver=6' alt='Room in Barcelona'/>
              }

              <div>
                  <span className={styles.__nombre}>{user.username}, 27</span>
                  <span className={styles.__companions}><img src={companionsImg}/> {companions}</span>

              </div>
              <span className={styles.__titulo}>{name}</span>
              <span className={styles.__precio}>{price} €/mes</span>
          </div>
        </Link>
    );
}

export default RoomCard;