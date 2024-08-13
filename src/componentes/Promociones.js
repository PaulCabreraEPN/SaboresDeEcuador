import React from 'react';
import { Menu } from './menu.js';
import { Cabecera } from './cabecera.js';
import { Micarrusel } from './Micarrusel.js';
import { Pie } from './pie.js';
import MyModal from './mymodal'
import imagen1 from './imagenes1/Brownie.jpg';
import imagen2 from './imagenes1/Cafe_con_crema_batida.jpg';
import imagen3 from './imagenes1/macarons.jpg';
import imagen4 from './imagenes1/tiramisu.jpg';
import imagen5 from './imagenes1/frapuchino.jpg';
import imagen6 from './imagenes1/americano.jpg';
import etiqueta10 from './imagenes/etiquetas/10%.jpg'
import etiqueta15 from './imagenes/etiquetas/15%.jpg'
import etiqueta50 from './imagenes/etiquetas/50%.jpg'
import './Promociones.css'

import 'bootstrap/dist/css/bootstrap.min.css';

export const Promociones = () => {
  return (
    <div id='promociones'>
        <Cabecera></Cabecera>
        <Menu></Menu>
        <br></br>
        <Micarrusel></Micarrusel>
        <div className='container text-center pt-3'>
          <div className='row'>
            <div className='col'>
              <div className='list-group'>

                <MyModal imagen={imagen1} titulo='Brownie Glaseado  ' etiqueta={etiqueta10} info='Brownie cubierto con un glaseado suave y delicioso.' precio='$5.50' desc='60g de brownie fudgy con glaseado de chocolate suave. Perfecto para un capricho dulce en cualquier momento.'/>
                <MyModal imagen={imagen2} titulo='Café con Crema Batida' etiqueta={etiqueta15} info='Un café rico y aromático coronado con una generosa capa de crema batida.' precio='$3.30' desc='Espresso intenso coronado con una generosa capa de crema batida. El equilibrio perfecto entre robusto y suave en cada sorbo.' />
              </div>
            </div>
            <div className='col'>
              <div className='list-group'>

                <MyModal imagen={imagen3} titulo='Macarons' etiqueta={etiqueta10} info='Cada uno es una delicada explosión de sabor en una variedad de colores vibrantes.' precio='$4.25' desc='3 macarons coloridos con relleno suave y delicioso. Un festín visual y gustativo en cada bocado.'/>
                <MyModal imagen={imagen5} titulo='Frapuchino' etiqueta={etiqueta50} info='Una mezcla fría y cremosa de café, leche y hielo, cubierta con un toque de crema batida.' precio='$4.00' desc='Delicioso frappuccino helado con una mezcla cremosa de café y hielo, coronado con crema batida. Perfecto para refrescarte y disfrutar en cualquier momento.' />
              </div>
            </div>
            <div className='col'>
              <div className='list-group'>

                <MyModal imagen={imagen4} titulo='Tiramisu' etiqueta={etiqueta15} info='Capas de suave crema mascarpone y bizcochos empapados en café.' precio='$5.00' desc='Delicioso tiramisú con capas de bizcocho empapado en café y mascarpone cremoso, espolvoreado con cacao. Un clásico italiano que encanta en cada bocado.'/>
                <MyModal imagen={imagen6} titulo='Café Americano' etiqueta={etiqueta50} info='Ideal para los amantes del café fuerte y auténtico.' precio='$2.75' desc='Espresso intenso diluido con agua caliente para un sabor robusto y equilibrado. Ideal para quienes buscan una taza de café clásica y reconfortante.'/>
              </div>
            </div>
          </div>

        </div>
        <Pie></Pie>
        
    </div>
  )
}
