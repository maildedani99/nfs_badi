import React from 'react';
import styles from './listRoom.module.css';
import RoomCard from "../roomCard/roomCard.view";

const ListRoom = ({rooms}) => {

    return (
        <div className={styles.__contenedor}>
            {rooms && rooms.map(room => {
                return (
                    <RoomCard
                        name ={room.name}
                        price={room.price}
                        id={room.id}
                        companions={room.companions}
                        images={room.images}
                        user={room.user}
                        key={room.id}
                    />
                );
            }
            )}
        </div>
    );
};

export default ListRoom;