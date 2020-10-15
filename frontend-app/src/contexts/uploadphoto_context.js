import React, { useState } from 'react';

let UploadPhotoContext = React.createContext()
let { Provider, Consumer } = UploadPhotoContext

function UploadPhotoProvider({ children }) {

    const [uploadPhotoArray, setUploadPhotoArray] = useState([])

    
    return (
        <Provider value={{ uploadPhotoArray, setUploadPhotoArray }}>
            {children}
        </Provider>
    )
}

export { UploadPhotoProvider, Consumer as UploadPhotoConsumer, UploadPhotoContext }