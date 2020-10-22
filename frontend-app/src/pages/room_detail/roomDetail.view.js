import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/authentication/authentication.context";
import styles from './roomDetail.module.css';
import 'antd/dist/antd.css';
import { DatePicker, Space } from 'antd';
import { AiOutlineCheck } from "react-icons/ai";
import swal from "sweetalert";
import { REGISTERPAGE } from "../../routes/routes";
import Footer from "../../components/footer/footer.view";
import Comentarios from "../../components/comentarios/comentarios.view";
import MapContainerDetalle from "../../components/roomDetailMap/roomDetailMap.view";
import companionsImg from './assets/companionsImg.png';

const RoomDetail = () => {

    const {id} = useParams();
    const [room, setRoom] = useState(null);
    const { state } = React.useContext(AuthContext);
    const { RangePicker } = DatePicker;
    const [arrival, setArrival] = useState('');
    const [departure, setDeparture] = useState('');

    const handleInputChange = (value, dateString) => {
        setArrival(dateString[0])
        setDeparture(dateString[1])
        console.log(dateString);
    }


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


    const reservaPendiente = () =>  {
        swal({
            title:'Reserva efectuada correctamente',
            text: 'Pendiente Respuesta del Host',
            icon: 'success',
            button: 'Close'
        });
    };

    const confirmarReserva = () => {

        const url = 'http://localhost/api/reserves/';
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


    return (
        <div>
            <div className={styles.__container}>
                <div className={styles.__galeria}>
                    {room === null ?
                        <img className={styles.__foto} src={'https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101027/112815900-stock-vector-no-image-available-icon-flat-vector.jpg?ver=6'} alt="Room's images"/>
                    :
                        <img className={styles.__foto} src={room.images[0].image_url} alt="Room's images"/>
                    }
                </div>

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
                                <Link to={REGISTERPAGE}>
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