import React, { useState } from "react";
import "../DiscribePanel/DiscribePanel.scss";

export function DiscribePanel(props) {
  const [isContentShow, setIsContentShow] = useState(false); // Déclaration d'un état pour gérer l'affichage du contenu donc False, les chevrons seront fermés
  const [isIconUp, setIsIconUp] = useState(true); // Déclaration d'un état pour gérer l'affichage du contenu, donc false = chevrons en haut, true = chevrons en bas

  // Fonction pour basculer l'état d'affichage du contenu et l'orientation de l'icône de chevron
  const toggleContent = () => {
    setIsContentShow(!isContentShow);
    setIsIconUp(!isIconUp);
  };

  return (
    <div className="discribe_panel">
      <p className='description__title'>
        <span>{props.title}</span>
        <i
          className={`fa-solid fa-chevron-${isIconUp ? 'up' : 'down'}`}
          onClick={toggleContent}>
        </i>
      </p>
      
      {isContentShow && <p className="description__content">{props.content}</p>} {/* Affichage du contenu si isContentShow est vrai */}
    </div>
  );
}
