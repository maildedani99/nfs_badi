import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import styles from './roomDetail.module.css';
import 'antd/dist/antd.css';
import { DatePicker, Space } from 'antd';
import Footer from "../../components/footer/footer.view";
import MapContainerDetalle from "../../components/roomDetailMap/roomDetailMap.view";
import companionsImg from './assets/companionsImg.png';

const RoomDetail = () => {

    const {id} = useParams();
    const [room, setRoom] = useState('');

    const { RangePicker } = DatePicker;

    useEffect(() => {
        const url = 'http://localhost/api/rooms/'+ id;
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
                    setRoom(payload);
                }
            )
            .catch(error => console.log(error));
    }, []);



    return (
        <div>
            <div className={styles.__container}>
                <div className={styles.__galeria}>

                </div>

                <div className={styles.__containerMain}>
                    <div className={styles.__detalleRoom}>
                        <span className={styles.__nombre}>{room.name}</span>
                        <span className={styles.__companeros}><img src={companionsImg}/> {room.companions} compañeros</span>
                        <span className={styles.__titulo}>Información básica</span>
                        <p className={styles.__descripcion}>{room.description}</p>
                        <span className={styles.__titulo}>Precio y condiciones</span>
                        <span className={styles.__precio}>{room.price} €/mes</span>
                        <span className={styles.__titulo}>Servicios</span>
                    </div>

                    <div className={styles.__calendario}>
                        <span className={styles.__tituloCalendario}>Añade las fechas para reservar la habitación</span>
                        <div className={styles.__fechasContenedor}>
                            <Space direction="vertical" size={5}>
                                <RangePicker placeholder={['Llegada', 'Salida']}/>
                            </Space>
                        </div>
                        <div className={styles.__botonReservar}>Reservar</div>
                    </div>
                </div>

                <div className={styles.__mapContainer}>
                    <MapContainerDetalle data={room}/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default RoomDetail;