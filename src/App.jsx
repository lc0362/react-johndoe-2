import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Header from './components/Header';  
import Footer from './components/Footer';  
import Home from './pages/Home'; 
import Blog from './pages/Blog';  
import Contact from './pages/Contact';  
import MentionsLegales from './pages/MentionsLegales';  
import Realisations from './pages/Realisations';  
import Services from './pages/Services';  
import GitHub from './pages/GitHub';  
import ScrollToTopButton from './components/ScrollToTopButton';

import './App.css';



function App() {
  return (
    <div className='body-style' >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentionslegales" element={<MentionsLegales />} />
        <Route path="/services" element={<Services />} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/github" element={<GitHub />} />
      </Routes>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default App;