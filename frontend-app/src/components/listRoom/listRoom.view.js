import React, {useEffect, useState} from 'react';
import styles from './listRoom.module.css';
import RoomCard from "../roomCard/roomCard.view";

const ListRoom = ({rooms}) => {


    return (
        <div className={styles.__contenedor}>
            {rooms && rooms.map(room => {
                return (
                    <RoomCard
                        name ={room.name}
                        user ={room.user}
                        features ={room.features}
                        description={room.description}
                        price={room.price}
                        key={room.id}
                    />
                );
            }
            )}
        </div>
    )
}

export default ListRoom;