import React, { useEffect, useState } from 'react';
import { DiscribePanel } from '../../components/DiscribePanel/DiscribePanel.jsx';
import "../ApartmentPage/ApartmentPage.scss";
import { ImageBanner } from '../../components/ImageBanner/ImageBanner.jsx';
import { ApartmentHeader } from '../../components/ApartmentHeader/ApartmentHeader';
import { Link, useParams } from 'react-router-dom';
import Main from '../../layout/Main/Main.jsx';
import "../../layout/ErrorPage/ErrorPage.scss";

function ApartmentPage() {
  const { id } = useParams(); // Récupérer l'ID de l'URL
  const [selectedFlat, setSelectedFlat] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchDataApartment();
  }, [id]); // Écouter les changements de l'ID dans l'URL

  async function fetchDataApartment() {
    try {
      const response = await fetch(`http://localhost:5173/database.json`);
      if (response.ok) {
        const flats = await response.json();
        const flat = flats.find((flat) => flat.id === id);
        if (flat) {
          setSelectedFlat(flat);
        } else {
          console.error("Aucun appartement trouvé pour l'ID:", id);
          setError(true); // Définir une erreur si l'appartement n'est pas trouvé
        }
      } else {
        console.error("Erreur lors de la récupération des données");
      }
    } catch (error) {
      console.error("Une erreur est survenue:", error);
    }
  }

  if (error) return (
    <Main>
      <div className='error__page'>
      <h1>404</h1>
      <h2>Oops ! La page que vous demandez n'existe pas</h2>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
    </Main>
  );

  if (!selectedFlat) return <div className='loading_page'>Loading...</div>;

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
