import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import styles from './roomDetail.module.css';
import 'antd/dist/antd.css';
import { DatePicker, Space } from 'antd';
import Footer from "../../components/footer/footer.view";
import MapContainerDetalle from "../../components/roomDetailMap/roomDetailMap.view";
import companionsImg from './assets/companionsImg.png';
import comentariosImg from '../../components/comentarios/assets/comentariosImg.png'
import { AiOutlineCheck } from "react-icons/ai";
import Comentarios from "../../components/comentarios/comentarios.view";

import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'

const RoomDetail = () => {

    const {id} = useParams();
    const [room, setRoom] = useState(null);

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
                    <Rd frt 
                        thumbnail="https://loremflickr.com/320/240"
                        image="https://www.w3schools.com/howto/img_forest.jpg"/>
                    <ReactFancyBox
                        thumbnail="https://loremflickr.com/320/240"
                        image="https://www.w3schools.com/howto/img_forest.jpg"/>
                </div>

                {room &&
                <div className={styles.__galeria}>

                    <div className={styles.__imageGallery}>
                        <div className={styles.__leftPanel}>
                            {room.images && room.images.map((image,i) => {
                                    if(i==0){
                                        return (
                                            <a id="single_image" href={image.image_url}><img key={image.id} className={styles.__galeria} src={image.image_url} alt='Room in Barcelona'/></a>
                                            /*<img key={image.id} className={styles.__galeria} src={image.image_url} alt='Room in Barcelona'/>*/
                                        );
                                    }
                                }
                            )}
                        </div>
                        <div className={styles.__rightPanel}>

                            <div className={styles.__container23}>
                                {room.images && room.images.map((image,i) => {
                                        if(i>=0){
                                            return (
                                                <div className={styles.__child_item}>
                                                    <img key={image.id} className={styles.__fotoCover} src={image.image_url} alt='Room in Barcelona'/>
                                                </div>
                                            );
                                        }
                                    }
                                )}
                            </div>
                        </div>
                        <div className={styles.__overlay}>Ver todas las fotos</div>
                    </div>
                </div>

                }

                {room &&

                <div className={styles.__containerMain}>
                    <div className={styles.__detalleRoom}>
                        <div className={styles.__divSeparador}>
                            <span className={styles.__nombre}>{room.name}</span>
                            <span className={styles.__companeros}><img src={companionsImg}/> {room.companions} compañeros</span>
                        </div>
                        <div className={styles.__divSeparador}>
                            <span className={styles.__titulo}>Información básica</span>
                            <p className={styles.__descripcion}>{room.description}</p>
                        </div>
                        <div className={styles.__divSeparador}>
                            <span className={styles.__titulo}>Precio y condiciones</span>
                            <span className={styles.__precio}>{room.price} €/mes</span>
                        </div>

                        <div className={styles.__divSeparador}>
                            {room.features.length === 0 ?
                                <></>
                                :
                                <>
                                    <span className={styles.__titulo}>Servicios</span>
                                    <div className={styles.__contenedorMap}>
                                        {room.features && room.features.map(feature => {
                                            return(
                                                <div>
                                                    <AiOutlineCheck fill="purple" />
                                                    <span className={styles.__features}> {feature.name}</span>
                                                </div>
                                            );
                                            }
                                        )}
                                    </div>
                                </>
                            }
                        </div>

                        <div className={styles.__divSeparador}>
                            <span className={styles.__titulo}>Otros huespedes ya han estado aquí</span>
                            <Comentarios />
                        </div>

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
                }

                <div>
                    <MapContainerDetalle data={room}/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default RoomDetail;