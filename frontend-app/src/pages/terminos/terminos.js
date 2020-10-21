import React from 'react';
import Navbar from '../../components/navbar/navbar';
import styles from './terminos.module.css';

const Terminos = () => {


    return(
        <>
            <Navbar />
            <div className={styles.__teminos_header}>
                <div className={styles.__terminos_title}>
                    <h1>Términos y Condiciones Generales de Uso de Room</h1>
                </div>
            </div>
            <div className={styles.__terminos_text}>
                
                <p>El aviso legal y las condiciones generales de uso, o términos y condiciones de uso, está pensado para todos aquellos que van a crear una página o sitio web. Este documento está adaptado al Reglamento Europeo de Protección de Datos (RGPD) y a la reciente Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales.                </p>
                <br/>
                <p>Este documento contiene, de forma general, un conjunto de menciones o referencias legales que servirán para regular las condiciones en las que los usuarios de Internet acceden, navegan y utilizan el sitio o página web. También comprende los derechos, obligaciones y responsabilidades a los que las partes quedan sometidas recíprocamente durante el acceso, navegación y uso del sitio web.</p>
                <br/>
                <p>La inclusión de un aviso legal y condiciones generales de uso aporta un gran nivel de confianza y seguridad jurídica a todos y cada uno de los sitios web presentes en Internet.</p>
                <br/>
                <p>También existe otro conjunto de menciones legales —condiciones generales de venta— que, a veces, se presentan de forma conjunta con el aviso legal y las condiciones generales de uso, pero no deben confundirse el uno con el otro, pues su contenido difiere. Así, mientras el aviso legal regula las condiciones en las que los usuarios de Internet acceden navegan y utilizan el sitio web, las condiciones generales de venta regulan las condiciones en las que se realizan los pedidos o solicitudes de compra en el sitio web, y establecen los derechos, obligaciones y responsabilidades que corresponden a cada parte de dicha compraventa.</p>
                <br/>
                <p>Por otra parte, si solo se desea elaborar un documento que contenga las normas acerca de cómo se recogen y gestionan los datos personales de los usuarios de una página o sitio web, así como acerca de las cookies utilizadas por el mismo, se utiliza la política de privacidad de un sitio web.</p>
                <br/>
            
                <p><b>¿Cómo utilizar este documento?</b></p>
                <br/>
                <p>La primera parte del documento es fundamental, ya que recoge los elementos identificativos del titular, que la Ley exige que sean accesibles de forma permanente, fácil, directa y gratuita para todos los Usuarios. Entre ellos se encuentran los datos de contacto del titular (la dirección, y el correo electrónico son especialmente importantes) y, en caso de tratarse de una persona jurídica, el NIF (antiguamente conocido con CIF) y los datos registrales del Registro donde se encuentre inscrita. Por tanto, antes de empezar es importante verificar estas informaciones.</p>
                <br/>
                <p>Además, se ha de tener en cuenta que si el contenido, información o servicio sobre el que versa el sitio web se refiere a una actividad del titular y ésta requiere autorización administrativa previa o está regulada, también deberá proveer información complementaria relativa a la misma.</p>
                <br/>
                <p>Más allá de este contenido de obligatorio cumplimiento, el resto se irá adaptando en función de las necesidades del titular y las características del sitio web. Así, el mismo contendrá, entre otras, informaciones relativas a:</p>
                <br/>
                <ul>
                    <li>la política de privacidad y protección de datos del sitio web;</li>
                    <li>la política de cookies, en caso de que en el sitio web se encuentren cookies (propias o de terceros);</li>
                    <li>la política de enlaces del sitio web; </li>
                    <li>cuestiones relativas a la propiedad intelectual e industrial del sitio web;</li>
                </ul>
                <p>Asimismo, se considera que el usuario acepta este aviso legal y las condiciones generales de uso a través del acceso, navegación y uso del sitio web.</p>
                <br/>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, molestiae! Velit, autem reiciendis odio quia enim optio quam at, molestias aut non minima accusantium recusandae modi voluptas aspernatur! Enim, ipsum!</p>
                <br/>
                <p>Bla, bla, bla...</p>

            </div>
        </>
    )
}
export default Terminos;
