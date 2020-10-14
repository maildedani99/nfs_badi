import React, { useRef, useState, useContext } from 'react';
import * as request from 'superagent';
import Image from 'cloudinary-react/lib/components/Image';
import Transformation from 'cloudinary-react/lib/components/Transformation';
import { cloudName, uploadPreset } from './cloudinary';
import styles from './uploadphoto.module.css';
import fileicon from './fileicon.png';
import { UploadPhotoContext, UploadPhotoProvider } from '../../contexts/uploadphoto_context';

const UploadPhoto = () => {

    //const [titleEl, setTitleEl] = useState('');
    const [photoId, setPhotoId] = useState(0);
    const fileInputEl = useRef(null);
    const [photoIds, setPhotoIds] = useState([]);

    const onPhotoUploaded = (photoIdIn, fileName, response) => {
        console.log(photoIdIn, fileName, response);
        setPhotoIds([...photoIds, response.body.public_id]);
        console.log(response.body.public_id);
        console.log(photoIds)
    };

    const onPhotoSelected = (files) => {
        const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
        //const title = titleEl;
        // eslint-disable-next-line no-restricted-syntax
        for (const file of files) {
            setPhotoId(photoId + 1);
            const fileName = file.name;

            request
                .post(url)
                .field('upload_preset', uploadPreset)
                .field('file', file)
                .field('multiple', false)
                //.field('tags', title ? `myphotoalbum,${title}` : 'myphotoalbum')
                //.field('context', title ? `photo=${title}` : '')
                .on('progress', (progress) => console.debug(photoId, file.name, progress))
                .end((error, response) => {
                    onPhotoUploaded(photoId, fileName, response);
                });
        }
    };

    return (
        <div>
            <div id="direct_upload">
                <form>
                    <div className={styles.__div_inputs_foto}>
                        <div className={styles.__div_foto}>
                            <label className={styles.__label_foto} >
                                <img className={styles.__fileicon} src={fileicon} alt="icono" />
                                {photoIds != 0 ?
                                    <p>{photoIds}</p> : <p>upload</p>}

                                <input
                                    className={styles.__input}

                                    type="file"
                                    accept="image/*"
                                    ref={fileInputEl}
                                    onChange={() => onPhotoSelected(fileInputEl.current.files)}
                                />
                            </label>
                        </div>


                        <div className={styles.__div_foto}>
                            <label className={styles.__label_foto} >
                                <img className={styles.__fileicon} src={fileicon} alt="icono" />
                                {photoIds != 0 ?
                                    <p>{photoIds}</p> : <p>upload</p>}

                                <input
                                    className={styles.__input}

                                    type="file"
                                    accept="image/*"
                                    ref={fileInputEl}
                                    onChange={() => onPhotoSelected(fileInputEl.current.files)}
                                />
                            </label>
                        </div>






                    </div>
                </form>
            </div>
            {/* {photoIds.map((publicId) => (
                <Image
                publicId={publicId}
                className="thumbnail inline"
                width="400"
                height="400"
                crop="fit"
                quality="180"
                >
                <Transformation quality="auto" fetchFormat="auto" />
                </Image>
            ))} */}
        </div>
    );
};

export default UploadPhoto;
