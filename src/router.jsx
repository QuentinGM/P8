// Router.js
import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; //Plus précisément, un Outlet est une référence à un élément de l'interface utilisateur, tel qu'un bouton, un champ de texte, une vue, etc. Cette référence permet au code source d'interagir avec cet élément. 
//Par exemple, un Outlet peut être utilisé pour changer le texte d'un champ de texte, modifier l'apparence d'une vue, ou capturer l'action d'un bouton.
import ReactDOM from 'react-dom/client';
import HomeMenu from './feuilles/HomeMenu/HomeMenu.jsx';
import Footer from './layout/Footer/Footer.jsx';
import NavBar from './components/Navbar/Navbar.jsx';
import Main from './layout/Main/Main.jsx';
import ApartmentPage from './feuilles/ApartmentPage/ApartmentPage.jsx';
import More from './feuilles/More/More.jsx';
import { ErrorPage } from './layout/ErrorPage/ErrorPage.jsx';

const HeaderAndFooter = () => {
  return (
    <>
      <NavBar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <HeaderAndFooter />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomeMenu />
      },
      {
        path: "/flat/:id",
        element: <ApartmentPage />
      },
      {
        path: "/more",
        element: <More />
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
