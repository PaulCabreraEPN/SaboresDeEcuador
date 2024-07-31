import React from 'react';
import  {Menu}  from './menu';
import logo from '../componentes/imagenes/MainLogo.png';

import imagen1 from '../componentes/imagenes1/producto11.jpeg';
import imagen2 from '../componentes/imagenes1/producto2.jpeg';

import imagen4 from '../componentes/imagenes1/Cafe_con_crema_batida.jpeg';
import imagen5 from '../componentes/imagenes1/frapuchino.jpeg';
import imagen6 from '../componentes/imagenes1/americano.jpg';
import imagen7 from '../componentes/imagenes1/almendras.jpeg';
import imagen8 from '../componentes/imagenes1/mocaccino.jpeg';
import imagen9 from '../componentes/imagenes1/irlandes.jpeg';
import imagen10 from '../componentes/imagenes1/otro.jpeg';
import imagen11 from '../componentes/imagenes1/Brownie.jpeg';
import imagen12 from '../componentes/imagenes1/tarta.jpeg';
import imagen13 from '../componentes/imagenes1/muffin.jpeg';
import imagen14 from '../componentes/imagenes1/galletas.jpeg';
import imagen15 from '../componentes/imagenes1/manzana.jpeg';
import imagen16 from '../componentes/imagenes1/macarons.jpeg';
import imagen17 from '../componentes/imagenes1/panna.jpg';
import imagen18 from '../componentes/imagenes1/tiramisu.jpeg';
import imagen19 from '../componentes/imagenes1/zanahoria.jpeg';
import imagen20 from '../componentes/imagenes1/zona1.jpeg';
import imagen21 from '../componentes/imagenes1/zona2.jpeg';
import imagen22 from '../componentes/imagenes1/zona3.jpg';
import imagen23 from '../componentes/imagenes1/zona4.jpeg';
import imagen24 from '../componentes/imagenes1/zona5.jpeg';
import imagen25 from '../componentes/imagenes1/zona6.jpeg';
import '../App.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

export const Productos = () => {
    
    return (
    <div>
        <div>
            <Menu />
            <div>
                <img src={logo} alt="logo" width={'110px'} />
            </div>
        </div>
        <Container className='cuer'>
      <h1>CAFES</h1>
      <Row>
        <Col xs={6} md={4}>
          <Image className='prod' src={imagen1} rounded />
          <h5 className='titulo'>Café con leche</h5>
          <p>Espresso combinado con una generosa cantidad de leche vaporizada, creando una bebida suave y cremosa con un equilibrio perfecto entre café y leche.</p>
        </Col>
        <Col xs={6} md={4}>
          <Image className='prod' src={imagen2} rounded />
          <h5 className='titulo'>Capuchino</h5>
          <p>Espresso cubierto con una capa de espuma de leche espesa, proporcionando un sabor fuerte a café con una textura ligera y aireada.</p>
        </Col>
        <Col xs={6} md={4}>
          <Image className='prod' src={imagen4} rounded />
          <h5 className='titulo'>Café con crema batida</h5>
          <p>Espresso servido con una capa de crema batida en la parte superior, añadiendo un toque dulce y lujoso a tu bebida.</p>
        </Col>
      </Row> <br />

      <Row>
        <Col xs={6} md={4}>
          <Image className='prod' src={imagen5} rounded />
          <h5 className='titulo'>Frapuchino</h5>
          <p>Café frío mezclado con hielo y leche, con una textura cremosa y refrescante, ideal para los días calurosos.</p>
        </Col>
        <Col xs={6} md={4}>
          <Image className='prod' src={imagen6} rounded />
          <h5 className='titulo'>Café Americano</h5>
          <p>Espresso diluido con agua caliente, ofreciendo un sabor más suave y menos concentrado que el espresso puro.</p>
        </Col>
        <Col xs={6} md={4}>
          <Image className='prod' src={imagen7} rounded />
          <h5 className='titulo'>Café con almendras</h5>
          <p>Espresso combinado con leche vaporizada y un toque de jarabe de almendras, proporcionando un sabor dulce y ligeramente a nuez.</p>
        </Col>
      </Row> <br />

      <Row>
        <Col xs={6} md={4}>
          <Image className='prod' src={imagen8} rounded />
          <h5 className='titulo'>Mochaccino</h5>
          <p>Espresso con leche vaporizada y un toque de sirope de chocolate, decorado con crema batida y espolvoreado con cacao, ideal para los amantes del chocolate.</p>
        </Col>
        <Col xs={6} md={4}>
          <Image className='prod' src={imagen9} rounded />
          <h5 className='titulo'>Café irlandés</h5>
          <p>Café negro mezclado con whisky irlandés y cubierto con crema batida, ofreciendo una combinación cálida y reconfortante de sabores.</p>
        </Col>
        <Col xs={6} md={4}>
          <Image className='prod' src={imagen10} rounded />
          <h5 className='titulo'>Affogato</h5>
          <p>Una bola de helado bañada con un espresso caliente, creando un contraste delicioso entre el frío del helado y el calor del café.</p>
        </Col>
      </Row> <br />
      <h1>POSTRES Y OTROS</h1>
      <Row>
        <Col xs={6} md={4}>
          <Image className='prod' src={imagen11} rounded />
          <h5 className='titulo'>Brownie de chocolate</h5>
          <p>Delicioso pastelito de chocolate con una textura densa y húmeda, perfecto para acompañar tu café.</p>
        </Col>
        <Col xs={6} md={4}>
          <Image className='prod' src={imagen12} rounded />
          <h5 className='titulo'>Tarta de queso</h5>
          <p>Suave y cremosa tarta con una base de galleta crujiente, ideal para un final dulce en tu visita.</p>
        </Col>
        <Col xs={6} md={4}>
          <Image className='prod' src={imagen13} rounded />
          <h5 className='titulo'>Muffin de arándanos</h5>
          <p>Muffin esponjoso lleno de arándanos frescos, con un toque de azúcar en la parte superior para un toque dulce y crujiente.</p>
        </Col>
      </Row> <br />

      <Row>
        <Col xs={6} md={4}>
          <Image className='prod' src={imagen14} rounded />
          <h5 className='titulo'>Galletas con chispas de chocolate</h5>
          <p>Galletas caseras con trozos generosos de chocolate, crujientes por fuera y suaves por dentro.</p>
        </Col>
        <Col xs={6} md={4}>
          <Image className='prod' src={imagen15} rounded />
          <h5 className='titulo'>Tarta de manzana</h5>
          <p>Tarta tradicional con relleno de manzana especiada y una corteza dorada, perfecta para los amantes de los sabores clásicos.</p>
        </Col>
        <Col xs={6} md={4}>
          <Image className='prod' src={imagen16} rounded />
          <h5 className='titulo'>Macarons</h5>
          <p>Dulces y delicadas galletas francesas de almendra con relleno de crema, disponibles en una variedad de sabores.</p>
        </Col>
      </Row> <br />

      <Row>
        <Col xs={6} md={4}>
          <Image className='prod' src={imagen17} rounded />
          <h5 className='titulo'>Panna cotta</h5>
          <p>Postre italiano de crema cocida, suave y ligera, con un toque de vainilla y a menudo acompañada de coulis de frutas.</p>
        </Col>
        <Col xs={6} md={4}>
          <Image className='prod' src={imagen18} rounded />
          <h5 className='titulo'>Tiramisu</h5>
          <p>Postre italiano a base de capas de bizcocho empapado en café y crema de mascarpone, con un toque de cacao en polvo.</p>
        </Col>
        <Col xs={6} md={4}>
          <Image className='prod' src={imagen19} rounded />
          <h5 className='titulo'>Pastel de zanahoria</h5>
          <p>Pastel húmedo y especiado hecho con zanahorias frescas, cubierto con un glaseado de queso crema para un sabor irresistible.</p>
        </Col>
      </Row> <br />

      <h1>RESERVACIÓNES</h1>
      <Row>
        <Col xs={6} md={4}>
          <Image className='prod' src={imagen20} rounded />
          <h5 className='titulo'>Rincón Vintage</h5>
          <p>Un área decorada con muebles retro, posters antiguos y una selección de vinilos. Este espacio transporta a los clientes a tiempos pasados, con una atmósfera nostálgica y acogedora.</p>
        </Col>
        <Col xs={6} md={4}>
          <Image className='prod' src={imagen21} rounded />
          <h5 className='titulo'>Sala de Estilo Industrial</h5>
          <p>Un diseño urbano con paredes de ladrillo expuesto, muebles metálicos y luces de estilo industrial. Ideal para aquellos que disfrutan de un ambiente moderno y minimalista.</p>
        </Col>
        <Col xs={6} md={4}>
          <Image className='prod' src={imagen22} rounded />
          <h5 className='titulo'>Espacio Tropical</h5>
          <p>Decorado con plantas exóticas, colores vibrantes y muebles de mimbre. Este espacio ofrece un ambiente relajado y veraniego, evocando la sensación de estar en una playa tropical.</p>
        </Col>
      </Row> <br />
      <Row>
        <Col xs={6} md={4}>
          <Image className='prod' src={imagen23} rounded />
          <h5 className='titulo'>Zona Bohemia</h5>
          <p>Un área con alfombras y cojines en el suelo, decorada con arte local y accesorios étnicos. Perfecta para quienes buscan un ambiente relajado y artístico, con un toque de eclecticismo.</p>
        </Col>
        <Col xs={6} md={4}>
          <Image className='prod' src={imagen24} rounded />
          <h5 className='titulo'>Rincón Literario</h5>
          <p>Ambientado como una biblioteca clásica, con estantes llenos de libros antiguos, sillas de cuero y lámparas de lectura. Este espacio es ideal para los amantes de la literatura y ofrece un ambiente tranquilo para disfrutar de una buena lectura con café.</p>
        </Col>
        <Col xs={6} md={4}>
          <Image className='prod' src={imagen25} rounded />
          <h5 className='titulo'>Sala de Inspiración Zen</h5>
          <p>Un área tranquila con elementos de diseño japonés, como tatamis, plantas de bambú y fuentes de agua. Este espacio está diseñado para ofrecer paz y serenidad, perfecto para meditar o relajarse mientras se toma un café.</p>
        </Col>
      </Row> <br />
      <a className='otrolink' href="/ruta/del/archivo.pdf" download>DESCARGAR EL CATALOGO EN LINEA</a>
    </Container>    
    </div>
    )
}
