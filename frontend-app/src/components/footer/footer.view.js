import React from 'react';
import styles from './footer.module.css'
import groupLogo from './assets/groupLogo.png'
import facebook from './assets/facebook.png'
import instagram from './assets/instagram.png'
import twitter from './assets/twitter.png'

const Footer = () => {

    return (
        <div className={styles.__contenedor}>
            <img className={styles.__logo} src={groupLogo} alt="logotipo"/>
            <p className={styles.__parrafo}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam eget nullam <br/>
                pellentesque aliquam curabitur cociis.
            </p>

            <div className={styles.__redesSociales}>
                <img className={styles.__redes} src={twitter} alt="twitter"/>
                <img className={styles.__redes} src={facebook} alt="facebook"/>
                <img className={styles.__redes} src={instagram} alt="instagram"/>
            </div>

        </div>
    );
}

export default Footer;