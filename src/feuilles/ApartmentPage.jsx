import React, { useEffect, useState } from 'react';
import { DiscribePanel } from '../components/DiscribePanel';
import "../feuilles/ApartmentPage.scss";
import { ImageBanner } from '../components/ImageBanner';
import { ApartmentHeader } from '../components/ApartmentHeader';
import { useLocation } from 'react-router-dom';

function ApartmentPage() {
  const location = useLocation();
  const [selectedFlat, setSelectedFlat] = useState(null);

  useEffect(() => {
    fetchDataApartment();
  }, []);

  function fetchDataApartment() {
    const storedApartmentId = localStorage.getItem('selectedApartmentId');
    const apartmentId = location.state ? location.state.apartmentId : null;
    
    if (apartmentId) {
      fetch("database.json")
        .then((res) => res.json())
        .then((flats) => {
          const flat = flats.find((flat) => flat.id === apartmentId);
          setSelectedFlat(flat);
          localStorage.setItem('selectedApartmentId', apartmentId);
        })
        .catch(console.error);
    } else if (storedApartmentId) {
      fetch("database.json")
        .then((res) => res.json())
        .then((flats) => {
          const flat = flats.find((flat) => flat.id === storedApartmentId);
          setSelectedFlat(flat);
        })
        .catch(console.error);
    }
  }

  if (!selectedFlat) return <div>Loading...</div>;

  return (
    <div className='apartment-page'>
      <ImageBanner pictures={selectedFlat.pictures} />
      <ApartmentHeader selectedFlat={selectedFlat} />
      <div className='apartment__description__here'>
        <DiscribePanel title="Description" content={selectedFlat.description}/>
        <DiscribePanel title="Equipements" content={selectedFlat.equipments.map((eq, i) => (
          <li key={i}>{eq}</li>
        ))}/>
      </div>
    </div>
  );
}

export default ApartmentPage;
