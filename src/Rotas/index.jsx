import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from "../pages/Homepage";


const Rotas = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={ <Homepage/>} />
      
    
    </Routes>
  </BrowserRouter>
);

export default Rotas;