import React, { useEffect, useState } from 'react';
import { DiscribePanel } from '../../components/DiscribePanel/DiscribePanel.jsx';
import "../ApartmentPage/ApartmentPage.scss";
import { ImageBanner } from '../../components/ImageBanner/ImageBanner.jsx';
import { ApartmentHeader } from '../../components/ApartmentHeader/ApartmentHeader';
import { Link, useParams } from 'react-router-dom';
import Main from '../../components/Main/Main.jsx';
import "../ErrorPage/ErrorPage.scss";

function ApartmentPage() {
  const { id } = useParams(); // Récupérer l'ID de l'URL à l'aide du hook useParams
  // useParams : est un hook fourni par React Router, une bibliothèque utilisée pour la navigation et la gestion des URL dans les applications React. 
  // Ce hook permet d'extraire les paramètres de l'URL de la page courante.
  const [selectedFlat, setSelectedFlat] = useState(null); // Déclaration d'un état pour stocker les données de l'appartement sélectionné
  const [error, setError] = useState(false); // Déclaration d'un état pour gérer les erreurs
  // UseState :  est un hook fourni par React qui permet à un composant fonctionnel de conserver un état local. 
  // Cela signifie qu'il peut stocker des valeurs qui persistent entre les rendus du composant et déclenchent une mise à jour du rendu lorsque ces valeurs changent.

  useEffect(() => {
    // useEffect : est un autre hook fourni par React. Il permet d'effectuer des effets de bord dans un composant fonctionnel. 
    //Ces effets peuvent être des opérations asynchrones, des abonnements à des événements ou des mises à jour de l'interface utilisateur 
    //en réponse à des changements d'état.
    fetchDataApartment(); 
  }, [id]); // Appel de la fonction fetchDataApartment lors du montage du composant ou lorsque l'ID dans l'URL change

  async function fetchDataApartment() {
    try {
      const response = await fetch(`http://localhost:5173/database.json`);
      if (response.ok) {
        const flats = await response.json();
        const flat = flats.find((flat) => flat.id === id); // Recherche de l'appartement correspondant à l'ID dans les données récupérées
        if (flat) {
          setSelectedFlat(flat); // Mettre à jour l'état avec les données de l'appartement trouvé
        } else {
          console.error("Aucun appartement trouvé pour l'ID:", id);
          setError(true); // Définir une erreur si l'appartement n'est pas trouvé
        }
      } else {
        console.error("Erreur lors de la récupération des données");
      }
    } catch (error) {
      console.error("Une erreur est survenue:", error); // Gérer les erreurs potentielles lors de la récupération des données
    }
  }
  // Afficher la page d'erreur 404 si une erreur est survenue
  if (error) return (
    <Main>
      <div className='error__page'>
      <h1>404</h1>
      <h2>Oops ! La page que vous demandez n'existe pas</h2>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
    </Main>
  );
  // Afficher un message de chargement si la connexion est considéré comme "Lente"
  if (!selectedFlat) return <div className='loading_page'>Loading...</div>;
  // Afficher les détails de l'appartement une fois les données chargées
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
