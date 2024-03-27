import React from 'react'
import "../ImageBanner/ImageBanner.jsx"
import { useState } from 'react';

export function ImageBanner(props) {
  const pictures = props.pictures;
  const [pictureCurrent, setPictureCurrent] = useState(0);

  const moveToNext = () => {
    setPictureCurrent((pictureCurrent + 1) % pictures.length);
  }

  const moveToPrevious = () => {
    setPictureCurrent((pictureCurrent - 1 + pictures.length) % pictures.length);
  }

  const ifPicturesAreOK = () => {
    return pictures && pictures.length > 0;
  };

  const getCarouselOrDefaultImage = () => {
    if (!ifPicturesAreOK()) {
      return <img src="https://www.figma.com/file/2BZEoBhyxt5IwZgRn0wGsL/image/56fae17eb9995860bb6384a77ca7dc9bf52da3be" className="show" alt="" />;
    }
    
    return pictures.map((pic, i) => (
      <img key={pic} src={pic} alt="" className={i === pictureCurrent ? "show" : ""} />
    ));
  };

  return (
    <div className='banner__image'>
      <div className='image__container'>
        {getCarouselOrDefaultImage()}
      </div>
      {ifPicturesAreOK() && pictures.length > 1 && (  // Ajout de la condition pour afficher les chevrons seulement si le nombre d'images est supérieur à 1
        <>
          <button className="btn btn-previous" onClick={moveToPrevious}>
            <i className='fas fa-chevron-left'></i>
          </button>
          <span className='counter-slide'>
            {pictureCurrent + 1} / {pictures.length}
          </span>
          <button className="btn btn-next" onClick={moveToNext}>
            <i className='fas fa-chevron-right'></i>
          </button>
        </>
      )}
    </div>
  );
}

export default ImageBanner;