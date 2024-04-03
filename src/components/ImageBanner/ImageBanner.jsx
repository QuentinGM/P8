import React from 'react'
import "../ImageBanner/ImageBanner.scss"
import { useState } from 'react';

export function ImageBanner(props) {
  const pictures = props.pictures; // Récupération de la liste d'images depuis les propriétés
  const [pictureCurrent, setPictureCurrent] = useState(0); // Déclaration d'un état pour suivre l'index de l'image actuellement affichée

  const moveToNext = () => {
    setPictureCurrent((pictureCurrent + 1) % pictures.length);
  }

  const moveToPrevious = () => {
    setPictureCurrent((pictureCurrent - 1 + pictures.length) % pictures.length);
  }

  const ifPicturesAreOK = () => {
    return pictures && pictures.length > 0;
  };

  // Fonction pour obtenir le carrousel d'images ou une image par défaut
  const getCarouselOrDefaultImage = () => {
    if (!ifPicturesAreOK()) {
      return <img src="" className="" alt="" />;
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