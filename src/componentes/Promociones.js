import React from 'react'
import slider1 from './imagenes/Promocionales/Slider-1.jpeg'
import slider2 from './imagenes/Promocionales/Slider-2.jpg'
import slider3 from './imagenes/Promocionales/Slider-3.jpg'
import { Menu } from './menu.js';
import { Cabecera } from './cabecera.js';
import { Micarrusel } from './Micarrusel.js';
import { Pie } from './pie.js';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Promociones = () => {
  return (
    <div>
        <Cabecera></Cabecera>
        <Menu></Menu>
        <Micarrusel></Micarrusel>
        <Pie></Pie>
        
    </div>
  )
}
