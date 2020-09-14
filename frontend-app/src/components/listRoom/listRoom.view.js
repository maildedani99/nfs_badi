import React, {useEffect, useState} from 'react';
import styles from './listRoom.module.css';
import RoomCard from "../roomCard/roomCard.view";

const ListRoom = () => {

    const [rooms, setRooms] = useState('');

    useEffect(() => {
        const url = 'http://localhost/api/rooms/';
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
                    console.log("List rooms saved");
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