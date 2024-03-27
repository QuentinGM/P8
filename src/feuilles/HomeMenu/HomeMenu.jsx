import React from 'react';
import "../HomeMenu/HomeMenu.scss";
import Banner from "../../layout/Banner.jsx"
import AppartmentGrid from "../../components/AppartmentGrid.jsx"


function HomeMenu() {
  return (
    <>
      <Banner />
      <AppartmentGrid />
    </>
  );
}

export default HomeMenu