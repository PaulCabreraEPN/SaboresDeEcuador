import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Menu } from './componentes/menu.js';
import { Cabecera } from './componentes/cabecera.js';
import { Pie } from './componentes/pie.js';
import Registro from './componentes/registro.js';
import { Productos } from './componentes/Productos.js';

import promo1 from './componentes/imagenes/Promocionales/Promo_bbble_coffee.jpg';
import promo2 from './componentes/imagenes/Promocionales/Promo_black_drink.jpg';
import promo3 from './componentes/imagenes/Promocionales/Promo_ice_coffee.jpg';
import promo4 from './componentes/imagenes/Promocionales/Promo_ice_cream.jpg';

function HomePage() {
  return (
    <>
      <Cabecera />
      <Menu />
      <main className='cuerpo'>
        <div id='promos' className='container'>
          <div className='row'>
            <div className='col-12 col-md-6 col-lg-3'>
              <img src={promo3} alt="Promo 3" className='promocional' />
            </div>
            <div className='col-12 col-md-6 col-lg-3'>
              <img src={promo2} alt="Promo 2" className='promocional' />
            </div>
            <div className='col-12 col-md-6 col-lg-3'>
              <img src={promo1} alt="Promo 1" className='promocional' />
            </div>
            <div className='col-12 col-md-6 col-lg-3'>
              <img src={promo4} alt="Promo 4" className='promocional' />
            </div>
          </div>
        </div>
        <div className='Invitacion'>
          <h1>Conoce nuestro menú</h1>
          <p>Te invitamos a explorar nuestra marca con deliciosos productos</p>
          <button type='button' className='botones'>Ver Menú</button>
        </div>
      </main>
      <Pie />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/registro' element={<Registro />} />
        <Route path='/Productos' element={<Productos />} />
      </Routes>
    </Router>
  );
}



export default App;
