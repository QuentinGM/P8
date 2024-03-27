import React from 'react';
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import HomeMenu from './feuilles/HomeMenu/HomeMenu.jsx';
import Footer from './layout/Footer.jsx';
import NavBar from './components/Navbar.jsx';
import Main from './layout/Main.jsx';
import ApartmentPage from './feuilles/ApartmentPage/ApartmentPage.jsx';
import More from './feuilles/More/More.jsx';
import { ErrorPage } from './layout/ErrorPage.jsx';

const HeaderAndFooter = () => {
  return <>
  <NavBar />
  <Main>
  <Outlet />
  </Main>
  <Footer />
  </>
}

const router = createBrowserRouter([
  {
    element: <HeaderAndFooter />,
    errorElement : <ErrorPage />,
    children : [
    {
      path : "/",
      element : <HomeMenu />
    },
    {
      path: "/flat",
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
