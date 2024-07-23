import promo1 from './componentes/imagenes/Promocionales/Promo_bbble_coffee.jpg';
import promo2 from './componentes/imagenes/Promocionales/Promo_black_drink.jpg';
import promo3 from './componentes/imagenes/Promocionales/Promo_ice_coffee.jpg';
import promo4 from './componentes/imagenes/Promocionales/Promo_ice_cream.jpg';

import './App.css';
import { Menu } from './componentes/menu.js';
import { Cabecera } from './componentes/cabecera.js';
import { Pie } from './componentes/pie.js';

function App() {
  return (
    <div className="App">
      <Cabecera/>
      <Menu/>
      <body class='cuerpo'>
        <div id='promos'>
          <div class="container">
            <div class="row">
              <div class="col">
                <img src={promo3} alt="logo" class='promocional'/>
              </div>
              <div class="col">
                <img src={promo2} alt="logo" class='promocional'/>
              </div>
              <div class="col">
                <img src={promo1} alt="logo" class='promocional'/>
              </div>
              <div class="col">
                <img src={promo4} alt="logo" class='promocional'/>
              </div>
            </div>
          </div>
        </div>
        <div class="Invitacion">
          <br></br>
          <h1>Conoce nuestro menú</h1>
          <p>Te invitamos a explorar nuestra marca con deliciosos productos</p>
          <button type='buttom' class='botones'>Ver Menú</button>
          <br></br>
        </div>
      </body>
      <Pie/>
      
    </div>
  );
}

export default App;
