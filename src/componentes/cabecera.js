import React from 'react'
import logo from './imagenes/MainLogo.png'
import user from './imagenes/Usuario_logo.webp'
import './cabecera.css';

export const Cabecera = () => {
  return (
    <div class='cabecera'>
        <div id="menu_logo">
                <img src={logo}  alt="logo" width={'110px'}/> 
        </div>
            <div class="container" id='cabecera'>
                <div class='row'>
                    <div class='col '>
                    <ul class="nav nav-pills justify-content-end d-flex align-items-center " id='bloque_inicio'>
                            <li class="nav-item">
                                <input type='text' placeholder='Buscar Productos' class='inf_buscar'></input>
                            </li>
                            <li class="nav-item">
                                <button type='buttom' class='boton_inicio'>Iniciar sesion</button>
                            </li>
                            <li class="nav-item">
                                <img src={user} alt="logo" width={'90px'}/>
                            </li>
                        </ul>
                   
                    </div>
                </div>
            </div>
           
            
                
                    
                        
               
        
    </div>
  )
}
