import React, {useEffect, useState} from 'react';
import styles from './recommendedRooms.module.css';
import RoomCard from "../roomCard/roomCard.view";
import {CONECTION_API} from "../../routes/routes";

const RecommendedRooms = () => {

    const [rooms, setRooms] = useState('');

    useEffect(() => {
        const url = CONECTION_API + '/rooms/recommended';
        const options = {
            method: 'GET',
            headers: new Headers(),
        };

        fetch(url, options)
            .then(response => {
                    if (response.status === 200) {
                        return response.json();
                    }
                    return Promise.reject(response.status);
                }
            )
            .then(payload => {
                    console.log("Recommended list rooms saved");
                    setRooms(payload);
                }
            )
            .catch(error => console.log(error));
    }, []);


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
    )
}

export default RecommendedRooms;