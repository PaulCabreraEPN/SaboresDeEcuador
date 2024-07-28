import React from 'react'
import { Menu } from './menu.js'
import logo from './imagenes/MainLogo.png'

export const Productos = () => {
    
    return (
    <div>
        <div>
            <Menu />
            <div>
                <img src={logo} alt="logo" width={'110px'} />
            </div>
        </div>
        
    </div>
    )
}
