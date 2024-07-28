import React from 'react'
import './pie.css'
import facebook from './imagenes/Iconos/facebook.ico';
import instagram from './imagenes/Iconos/instagram.ico';
import youtube from './imagenes/Iconos/youtube.ico';

export const Pie = () => {
  return (
    <div class='pie'>
        <div class="container">
            <div class="row ">
                <div class="col justify-content-center d-flex ">
                    <a href="https://www.facebook.com/?locale=es_LA"><img src={facebook} alt="logo" class='icono'/></a>
                </div>
                <div class="col justify-content-center d-flex">
                    <a href="https://www.instagram.com"><img src={instagram} alt="logo" class='icono'/></a>
                </div>
                <div class="col justify-content-center d-flex">
                    <a href="https://www.youtube.com/"><img src={youtube} alt="logo" class='icono'/></a>
                </div>
            </div>
            <div class='politicos'>
                <p>Butigue ®. Todos los derechos reservados 2024.</p>
                <a class="Fin" href="#"><b>Política de Cookies | Políticas de Privacidad </b> </a> 
                <p>Desarrollado por: COFFEE & DREAMS</p>
            </div>
        </div>
    </div>
  )
}
