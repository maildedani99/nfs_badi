import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/authentication/authentication.context";
import styles from './roomDetail.module.css';
import 'antd/dist/antd.css';
import {DatePicker, Space, Spin} from 'antd';
import { AiOutlineCheck } from "react-icons/ai";
import swal from "sweetalert";
import {CONECTION_API, LOGINPAGE} from "../../routes/routes";
import Footer from "../../components/footer/footer.view";
import Comentarios from "../../components/comentarios/comentarios.view";
import MapContainerDetalle from "../../components/roomDetailMap/roomDetailMap.view";
import companionsImg from './assets/companionsImg.png';
import { SRLWrapper, useLightbox } from "simple-react-lightbox";

const RoomDetail = () => {

    const {id} = useParams();
    const [room, setRoom] = useState(null);
    const { state } = React.useContext(AuthContext);

    const { RangePicker } = DatePicker;
    const { openLightbox } = useLightbox();

    const [arrival, setArrival] = useState('');
    const [departure, setDeparture] = useState('');

    const handleInputChange = (value, dateString) => {
        setArrival(dateString[0])
        setDeparture(dateString[1])
        console.log(dateString);
    }


    useEffect(() => {
        const url = CONECTION_API + 'rooms/'+ id;
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


    const reservaPendiente = () =>  {
        swal({
            title:'Reserva efectuada correctamente',
            text: 'Pendiente Respuesta del Host',
            icon: 'success',
            button: 'Close'
        });
    };

    const confirmarReserva = () => {

        const url = CONECTION_API + 'reserves/';
        const body = {
            room_id: room.id,
            host_id: room.user.id,
            guest_id: state.user.id,
            arrival: arrival,
            departure: departure,
            price:room.price
        };

        const options = {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json'
                    }),
                mode: 'cors',
                body: JSON.stringify(body),
                };

            fetch(url,options)
                .then(response => {
                    if (response.status === 201) {
                        reservaPendiente();
                        return response.json();
                        }
                        return Promise.reject(response.status);
                    })
                .then()
                .catch(error => console.log(error));
                }

        const optionsSRLWrapper = {
            buttons: {
                showAutoplayButton: false,
                showDownloadButton: false,
                showThumbnailsButton: false,
                iconPadding: '5px'
            },
            translations: {
                closeText: 'Cerrar',
                nextText: 'Siguiente',
                previousText: 'Anterior',
            },
            thumbnails: {
                showThumbnails: false
            }
        }

    return (
        <div>
            <div className={styles.__container}>

                {room === null ?
                    <div className={styles.__spinner}>
                        <Spin size={'large'}/>
                    </div>
                    :
                    <div></div>
                }

                {room && <SRLWrapper options={optionsSRLWrapper}>

                    <div className={styles.__galeria}>
                        <div className={styles.__imageGallery}>
                            <div className={styles.__leftPanel}>
                                {room.images && room.images.map((image,i) => {
                                        if(i==0){
                                            return (
                                                <img key={image.id} className={styles.__fotoMain} src={image.image_url}/>
                                            );
                                        }
                                    }
                                )}
                            </div>
                            <div className={styles.__rightPanel}>

                                <div className={styles.__containerImages}>
                                    {room.images && room.images.map((image,i) => {
                                            if(i!=0){
                                                return (
                                                    <div className={((i<=4) ? styles.__child_item : styles.__child_hidden)}>
                                                        <img key={image.id} className={styles.__fotoCover} src={image.image_url}/>
                                                    </div>
                                                );
                                            }
                                        }
                                    )}
                                </div>
                            </div>
                            <div className={((room.images.length) !== 0 ? styles.__overlay : styles.__child_hidden)}>
                                <a onClick={() => openLightbox()}>
                                    Ver todas las fotos
                                </a>
                            </div>
                        </div>
                    </div>
                </SRLWrapper>
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

                    {state.isAuthenticated && state.user.role === 'HOST' ?
                        <div></div>
                        :
                        <div className={styles.__calendario}>
                            <span className={styles.__tituloCalendario}>Añade las fechas para reservar la habitación</span>
                            <div className={styles.__fechasContenedor}>
                            <Space direction="vertical" size={5}>
                            <RangePicker placeholder={['Llegada', 'Salida']}
                            onChange={handleInputChange}

                            />
                            </Space>
                            </div>
                            {state.isAuthenticated ?
                                <div className={styles.__botonReservar} onClick={confirmarReserva}>Reservar</div>
                            :
                                <Link to={LOGINPAGE}>
                                    <div className={styles.__botonReservar}>Reservar</div>
                                </Link>
                            }

                        </div>
                    }
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