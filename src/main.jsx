import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'fontawesome/generate.js';
import NavBar from './Components/Header/Nav/Nav.jsx'
import Section1 from './Pages/HomePage/Section1.jsx';
import Section2 from './Pages/HomePage/Section2.jsx';
import Footer from './Components/Footer/Footer.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(

  <>
  <NavBar />
  <Section1 />
  <Section2 />
  <Footer />
  </>
)











