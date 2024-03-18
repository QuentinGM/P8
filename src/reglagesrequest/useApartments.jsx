import React, { useEffect, useState } from "react";

export const useApartments = () => {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    fetch("./database.json", { signal: abortController.signal })
      .then((res) => res.json())
      .then((res) => setApartments(res))
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error("Error during fetch", error);
        }
      });

    return () => {
      console.log("cleanup");
      abortController.abort();
    };
  }, []);

  return apartments;
};
