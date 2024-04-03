import React from 'react';
import "../CardApartment/CardApartment.scss";
import { Link } from 'react-router-dom';

function CardApartment(props) {
  return (
    // Utilisation de Link pour créer un lien vers la page d'appartement correspondant à l'ID passé en props
    <Link to={`/flat/${props.id}`} className="card-link">
      <div className="apartment">
        <img src={props.imageUrl} alt="" />
        <div className="apartment__subtitle">{props.title}</div>
      </div>
    </Link>
  );
}

export default CardApartment;
