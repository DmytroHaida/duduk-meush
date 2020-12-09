import React from 'react';
import preloaderIMG from '../assets/img/preloader/preloader.gif'
let Preloader = (props) => {
    return (
        <div className="userPreloaderLayer">
            <img className="preloaderIMG" src={preloaderIMG} width={props.width} alt='Preloading' />
        </div>
    );

}

export default Preloader;