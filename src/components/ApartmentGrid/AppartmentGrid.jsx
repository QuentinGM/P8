import React from 'react';
import "../ApartmentGrid/AppartmentGrid.scss";
import CardApartment from "../CardApartment/CardApartment.jsx";
import { useApartments } from '../../services/useApartments.jsx';

function AppartmentGrid() {
  const apartments = useApartments();

  return (
    <div className="grid">
      {apartments.map((apartment) => (
        <CardApartment
          title={apartment.title}
          imageUrl={apartment.cover}
          id={apartment.id}
          key={apartment.id}
        />
      ))}
    </div>
  );
}

export default AppartmentGrid;
