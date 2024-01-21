import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.js';
import "./App.css"
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
const App = () => {
  return (
    <>
    <header>
      <Navbar/>
    </header>
    <main>
    <Home/>
    </main>
    <Footer/>
    </>
  )
}

export default App