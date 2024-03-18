import React from 'react';
import "./AppartmentGrid.scss";
import CardApartment from "./CardApartment.jsx";
import { useApartments } from '../reglagesrequest/useApartments.jsx';

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
