import React from 'react'
import "../ErrorPage/ErrorPage.scss"
import Navbar from '../../components/Navbar/Navbar.jsx'
import Main from '../Main/Main.jsx'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer.jsx'

export function ErrorPage() {
  return (
  <>
  <Navbar />
  <Main>
    <div className='error__page'>
  <h1>404</h1>
  <h2>Oops ! La page que vous demandez n'existe pas</h2>
  <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  </Main>
  <Footer />
  </>
  )
  }
