import React from 'react'
import { useEffect } from 'react';
import "./App.css"
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
    <header>
      <Navbar/>
    </header>
    <main className='container'>
    <Home/>
    </main>
    <Footer/>
    </>
  )
}

export default App