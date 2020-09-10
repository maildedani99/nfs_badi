import React, { useState } from 'react';
import styles from '../../pages/room_form/room_form.module.css';

const CheckboxFeaturesContainer = () => {

    const [features, setFeatures] = useState ([]);

    const url = 'http://localhost/api/features';
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
        })
        .then(function (myJson) {
            setFeatures(myJson);
            console.log(myJson);
        })
        .catch(error => console.log(error));

    return (
    
            features.map ((item) => 
                
                <div className={styles.__checkbox_group}>
                            <input type="checkbox" value={item.name} />
                            <label className={styles.__room_label}> {item.name} </label>
                        </div>
        )
        
)
}

export default CheckboxFeaturesContainer;