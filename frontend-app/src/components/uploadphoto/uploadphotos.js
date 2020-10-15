import React, { useRef, useState, useContext } from 'react';
import * as request from 'superagent';
import { cloudName, uploadPreset } from './cloudinary';
import styles from './uploadphoto.module.css';
// import fileicon from './fileicon.png';
import { UploadPhotoContext } from '../../contexts/uploadphoto_context';

const UploadPhoto = (props) => {

    //const [titleEl, setTitleEl] = useState('');
    const [photoUrl, setPhotoUrl] = useState(null);
    const fileInputEl = useRef(null);
    const { uploadPhotoArray, setUploadPhotoArray } = useContext(UploadPhotoContext)

    const onPhotoUploaded = (photoIdIn, fileName, response) => {
        console.log(photoIdIn, fileName, response);
        setPhotoUrl(response.body.secure_url);
        setUploadPhotoArray([...uploadPhotoArray, response.body.secure_url] )
        console.log(uploadPhotoArray)
    };

    const onPhotoSelected = (files) => {
        const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
        //const title = titleEl;
        // eslint-disable-next-line no-restricted-syntax
        for (const file of files) {
            setPhotoUrl(photoUrl + 1);
            const fileName = file.name;

            request
                .post(url)
                .field('upload_preset', uploadPreset)
                .field('file', file)
                .field('multiple', false)
                //.field('tags', title ? `myphotoalbum,${title}` : 'myphotoalbum')
                //.field('context', title ? `photo=${title}` : '')
                .on('progress', (progress) => console.debug(photoUrl, file.name, progress))
                .end((error, response) => {
                    onPhotoUploaded(photoUrl, fileName, response);
                    console.log(response);
                });
        }
    };

    return (
        <div id="direct_upload">
            {photoUrl ?
                <div className={styles.__div_foto}>
                    <img src={photoUrl} />
                </div>

                :

                <form>
                    <div className={styles.__div_inputs_foto}>

                        <div className={styles.__div_foto}>
                            <label className={styles.__label_foto} >
                                <img className={styles.__fileicon} src={'fileicon'} alt="icono" />
                                <p>upload</p>
                                <input
                                    className={styles.__input}
                                    name={props.name}
                                    type="file"
                                    accept="image/*"
                                    ref={fileInputEl}
                                    onChange={() => onPhotoSelected(fileInputEl.current.files)}
                                />
                            </label>
                        </div>
                    </div>
                </form>
            }

        </div>
    );
};

export default UploadPhoto;
