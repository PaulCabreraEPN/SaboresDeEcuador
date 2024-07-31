import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './imagenes/MainLogo.png';
import user from './imagenes/Usuario_logo.webp';
import './cabecera.css';

export const Cabecera = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className='cabecera'>
      <div id="menu_logo">
        <a href='http://localhost:3000/'><img src={logo} alt="logo" width={'110px'} /></a>
      </div>
      <div className="container" id='cabecera'>
        <div className='row'>
          <div className='col'>
            <ul className="nav nav-pills justify-content-end d-flex align-items-center" id='bloque_inicio'>
              <li className="nav-item">
                <input type='text' placeholder='Buscar Productos' className='inf_buscar' />
              </li>
              <li className="nav-item">
                <button type='button' className='boton_inicio' onClick={handleLoginClick}>Iniciar sesión</button>
              </li>
              <li className="nav-item">
                <a onClick={handleLoginClick}><img src={user} alt="logo" width={'90px'} /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
