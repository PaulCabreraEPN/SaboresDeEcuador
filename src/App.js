import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Menu } from './componentes/menu.js';
import { Cabecera } from './componentes/cabecera.js';
import { Pie } from './componentes/pie.js';
import Registro from './componentes/registro.js';
import Login from './componentes/login.js';
import { Productos } from './componentes/Productos.js';
import { Sobre_Nosotros } from './componentes/Sobre_Nosotros.js';
import { useNavigate } from 'react-router-dom';

import promo1 from './componentes/imagenes/Promocionales/Promo_bbble_coffee.jpg';
import promo2 from './componentes/imagenes/Promocionales/Promo_black_drink.jpg';
import promo3 from './componentes/imagenes/Promocionales/Promo_ice_coffee.jpg';
import promo4 from './componentes/imagenes/Promocionales/Promo_ice_cream.jpg';
import { Promociones } from './componentes/Promociones.js';
import 'bootstrap/dist/css/bootstrap.min.css';



function HomePage() {
  const navigate = useNavigate();

  const handleLoginClickProm = () => {
    navigate('/Promociones');
  };
  
  return (
    <>
      <Cabecera />
      <Menu />
      <main className='cuerpo'>
        <div id='promos' className='container'>
          <div className='row'>
            <div className='col-6'>
              <br></br>
              <h4> Disfruta de nuestras promociones </h4>
            </div>
            <div className='col-6' id='cabezaProm'>
            <br></br>
              <button type='button' onClick={handleLoginClickProm} className='botonProm'>Ver todas las Pomociones</button>
            </div>
          </div>
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
      <nav class="flex justify-between fixed bottom-0 md:hidden bg-white w-full px-10 py-3 border-t"><a href="/"><div class="flex flex-col items-center gap-1 "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="m3.012 10.981-.012.02h2v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9h2a1 1 0 0 0 .555-1.833l-9-6a1 1 0 0 0-1.11 0l-9 6a1 1 0 0 0-.277 1.387.98.98 0 0 0 .844.426ZM10 14.001a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h-4v-5Z"></path></svg><p class="text-sm font-normal">Inicio</p></div></a><a href="/menu"><div class="flex flex-col items-center gap-1 text-primary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"></path></svg><p class="text-sm text-primary font-normal">Menú</p></div></a><a href="/coupons"><div class="flex flex-col items-center gap-1 "><svg width="20" height="24" viewBox="0 0 20 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M3.45454 24H16.5455C17.4134 24 18.2458 23.6552 18.8596 23.0414C19.4734 22.4278 19.8182 21.5954 19.8182 20.7273V3.27274C19.8182 2.40475 19.4734 1.57233 18.8596 0.958557C18.2458 0.344805 17.4134 0 16.5455 0H13.2727C12.9834 0 12.7059 0.114935 12.5013 0.319522C12.2968 0.524107 12.1818 0.801581 12.1818 1.09091C12.1818 1.66957 11.952 2.22452 11.5428 2.63369C11.1336 3.04286 10.5787 3.27274 10 3.27274C9.42135 3.27274 8.86639 3.04286 8.45722 2.63369C8.04804 2.22452 7.81818 1.66957 7.81818 1.09091C7.81818 0.801581 7.70325 0.524107 7.49865 0.319522C7.29407 0.114935 7.01659 0 6.72727 0H3.45454C2.58656 0 1.75412 0.344805 1.14037 0.958557C0.526601 1.57233 0.181803 2.40475 0.181803 3.27274V20.7273C0.181803 21.5954 0.526601 22.4278 1.14037 23.0414C1.75412 23.6552 2.58656 24 3.45454 24ZM2.36362 9.8182H3.3258C3.61513 9.8182 3.89261 9.70327 4.0972 9.49867C4.30178 9.29409 4.41672 9.01661 4.41672 8.72729C4.41672 8.43796 4.30178 8.16048 4.0972 7.95589C3.89261 7.75131 3.61513 7.63637 3.3258 7.63637H2.36362V3.27274C2.36362 2.98341 2.47856 2.70593 2.68315 2.50134C2.88773 2.29676 3.16521 2.18182 3.45454 2.18182H5.77381C6.01489 3.11949 6.56096 3.95036 7.32606 4.54362C8.09116 5.13689 9.03184 5.45886 10 5.45886C10.9682 5.45886 11.9088 5.13689 12.6739 4.54362C13.439 3.95036 13.985 3.11949 14.2262 2.18182H16.5455C16.8348 2.18182 17.1123 2.29676 17.3168 2.50134C17.5214 2.70593 17.6364 2.98341 17.6364 3.27274V7.63637H16.6742C16.3849 7.63637 16.1074 7.75131 15.9029 7.95589C15.6982 8.16048 15.5833 8.43796 15.5833 8.72729C15.5833 9.01661 15.6982 9.29409 15.9029 9.49867C16.1074 9.70327 16.3849 9.8182 16.6742 9.8182H17.6364V20.7273C17.6364 21.0166 17.5214 21.2941 17.3168 21.4987C17.1123 21.7034 16.8348 21.8182 16.5455 21.8182H3.45454C3.16521 21.8182 2.88773 21.7034 2.68315 21.4987C2.47856 21.2941 2.36362 21.0166 2.36362 20.7273V9.8182ZM5.31562 8.72729C5.31562 8.43796 5.43056 8.16048 5.63516 7.95589C5.83974 7.75131 6.11721 7.63637 6.40654 7.63637H8.45964C8.74897 7.63637 9.02644 7.75131 9.23102 7.95589C9.43562 8.16048 9.55054 8.43796 9.55054 8.72729C9.55054 9.01661 9.43562 9.29409 9.23102 9.49867C9.02644 9.70327 8.74897 9.8182 8.45964 9.8182H6.40654C6.11721 9.8182 5.83974 9.70327 5.63516 9.49867C5.43056 9.29409 5.31562 9.01661 5.31562 8.72729ZM10.4495 8.72729C10.4495 8.43796 10.5644 8.16048 10.769 7.95589C10.9736 7.75131 11.251 7.63637 11.5404 7.63637H13.5935C13.8828 7.63637 14.1603 7.75131 14.3648 7.95589C14.5694 8.16048 14.6844 8.43796 14.6844 8.72729C14.6844 9.01661 14.5694 9.29409 14.3648 9.49867C14.1603 9.70327 13.8828 9.8182 13.5935 9.8182H11.5404C11.251 9.8182 10.9736 9.70327 10.769 9.49867C10.5644 9.29409 10.4495 9.01661 10.4495 8.72729Z"></path></svg><p class="text-sm font-normal">Cupones</p></div></a><a href="/account"><div class="flex flex-col items-center gap-1 "><svg width="20" height="24" viewBox="0 0 20 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M9.99996 10.9091C11.0788 10.9091 12.1334 10.5892 13.0303 9.98986C13.9274 9.39049 14.6265 8.53861 15.0393 7.54192C15.4522 6.54524 15.5602 5.4485 15.3497 4.39043C15.1393 3.33235 14.6197 2.36043 13.8569 1.59761C13.0941 0.834765 12.1222 0.315274 11.0641 0.10481C10.006 -0.105655 8.90929 0.00236342 7.9126 0.415206C6.9159 0.828056 6.06402 1.52718 5.46466 2.42417C4.8653 3.32116 4.54541 4.37575 4.54541 5.45455C4.54715 6.90066 5.12236 8.28704 6.14493 9.30959C7.16748 10.3322 8.55385 10.9074 9.99996 10.9091ZM9.99996 2.18182C10.6472 2.18182 11.28 2.37377 11.8182 2.73338C12.3564 3.09298 12.7759 3.60412 13.0236 4.20213C13.2713 4.80015 13.336 5.45819 13.2098 6.09303C13.0835 6.72788 12.7718 7.31103 12.3141 7.76874C11.8564 8.22643 11.2733 8.53812 10.6384 8.6644C10.0036 8.79068 9.34556 8.72588 8.74753 8.47817C8.14952 8.23047 7.63839 7.81099 7.27878 7.27279C6.91917 6.73459 6.72723 6.10184 6.72723 5.45455C6.72723 4.58658 7.07203 3.75414 7.68579 3.14039C8.29955 2.52664 9.13198 2.18182 9.99996 2.18182ZM1.27268 24H18.7272C19.0165 24 19.294 23.8851 19.4986 23.6806C19.7033 23.4759 19.8182 23.1985 19.8182 22.9092V18.5455C19.8164 17.0994 19.2412 15.713 18.2186 14.6905C17.196 13.6679 15.8097 13.0927 14.3637 13.0909H5.63631C4.19021 13.0927 2.80383 13.6679 1.78128 14.6905C0.758729 15.713 0.183497 17.0994 0.181763 18.5455V22.9092C0.181763 23.1985 0.296701 23.4759 0.50128 23.6806C0.705875 23.8851 0.983353 24 1.27268 24ZM2.36358 18.5455C2.36358 17.6776 2.70839 16.8452 3.32215 16.2314C3.9359 15.6176 4.76833 15.2728 5.63631 15.2728H14.3637C15.2316 15.2728 16.064 15.6176 16.6778 16.2314C17.2916 16.8452 17.6364 17.6776 17.6364 18.5455V21.8182H2.36358V18.5455Z"></path></svg><p class="text-sm font-normal">Perfil</p></div></a></nav>
      
      
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/registro' element={<Registro />} />
        <Route path='/login' element={<Login />}  />
        <Route path='/Productos' element={<Productos />} />
        <Route path='/Sobre_Nosotros' element={<Sobre_Nosotros />} />
        <Route path='/Promociones' element={<Promociones />} />
      </Routes>
    </Router>
  );
}



export default App;
