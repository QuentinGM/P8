import React, { useEffect, useState } from "react";

export const useApartments = () => {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5173/database.json");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setApartments(data);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error("Error during fetch", error);
        }
      }
    };
  
    fetchData();
    
    return () => {
      // Cleanup function to abort fetch if component unmounts
      const abortController = new AbortController();
      abortController.abort();
    };
  }, []);

  return apartments;
};
