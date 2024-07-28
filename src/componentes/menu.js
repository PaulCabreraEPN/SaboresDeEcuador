import React from 'react';
import "./menu.css";
import { useNavigate } from 'react-router-dom';

export const Menu = () => {
    const navigate = useNavigate();
    
    const handleLoginClickPro = () => {
        navigate('/Productos');
      };

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
                            <a class="nav-link " aria-current="page" onClick={handleLoginClickPro}>Menú</a>
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
