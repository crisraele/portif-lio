import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Destino from './components/pages/Destino';
import Contato from './components/pages/Contato';
import Promocoes from './components/pages/Promocoes';
import Login from './components/pages/Login';


function App() {
  return (
    <>
      
      <Router>

      <Navbar />
    
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/destino'  element={<Destino />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/login' element={<Login />} />
        <Route path='/promocoes' element={ <Promocoes />} />
      </Routes>
   
      </Router>




      
  </>
  );
}

export default App;
