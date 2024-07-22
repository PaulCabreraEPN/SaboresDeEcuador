import React from 'react'
import "./menu.css"

export const Menu = () => {
  return (
    <div class='menu'>
        <div id='titulo' class='d-flex align-items-center'>
            <b>COFFEE & DREAMS</b>
        </div>
        <div class='container'>
            <div class='row'>
                <div class='col' >
                    <ul class="nav nav-pills justify-content-end">
                        <li class="nav-item">
                            <a class="nav-link " aria-current="page" href="#">Menú</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Promociones</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Sobre Nosotros</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">Contactos</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    
  )
}
