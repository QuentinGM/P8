import React, { useEffect, useState } from 'react';
import { DiscribePanel } from '../../components/DiscribePanel/DiscribePanel.jsx';
import "../ApartmentPage/ApartmentPage.scss";
import { ImageBanner } from '../../components/ImageBanner/ImageBanner.jsx';
import { ApartmentHeader } from '../../components/ApartmentHeader/ApartmentHeader';
import { useLocation } from 'react-router-dom';

function ApartmentPage() {
  const location = useLocation();
  const [selectedFlat, setSelectedFlat] = useState(null);

  useEffect(() => {
    fetchDataApartment();
  }, []);

  async function fetchDataApartment() {
    try {
      const storedApartmentId = localStorage.getItem('selectedApartmentId');
      const apartmentId = location.state ? location.state.apartmentId : null;
      
      let response;
      if (apartmentId) {
        response = await fetch("http://localhost:5173/database.json");
      } else if (storedApartmentId) {
        response = await fetch("http://localhost:5173/database.json");
      }

      if (response.ok) {
        const flats = await response.json();
        const flat = flats.find((flat) => flat.id === (apartmentId || storedApartmentId));
        setSelectedFlat(flat);
        localStorage.setItem('selectedApartmentId', flat.id);
      } else {
        console.error("Erreur lors de la récupération des données");
      }
    } catch (error) {
      console.error("Une erreur est survenue:", error);
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
