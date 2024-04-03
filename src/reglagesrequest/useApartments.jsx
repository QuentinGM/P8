import React, { useEffect, useState } from "react";

// Définition d'un hook personnalisé useApartments
export const useApartments = () => {
  // Déclaration d'un état pour stocker les données des appartements
  const [apartments, setApartments] = useState([]);

  // Utilisation de useEffect pour effectuer des opérations après le rendu du composant
  useEffect(() => {
    // Fonction asynchrone pour récupérer les données des appartements
    const fetchData = async () => {
      try {
        // Requête pour récupérer les données depuis le fichier JSON
        const response = await fetch("database.json");
        // Vérification de la réponse de la requête
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Conversion de la réponse en JSON
        const data = await response.json();
        // Mise à jour de l'état avec les données des appartements
        setApartments(data);
      } catch (error) {
        // Gestion des erreurs
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error("Error during fetch", error);
        }
      }
    };
  
    // Appel de la fonction fetchData pour récupérer les données
    fetchData();
    
    // Nettoyage pour annuler la requête si le composant est démonté
    return () => {
      const abortController = new AbortController();
      abortController.abort();
    };
  }, []); // Le tableau vide indique que cet effet ne dépend d'aucune valeur externe

  // Retourner les données des appartements
  return apartments;
};
