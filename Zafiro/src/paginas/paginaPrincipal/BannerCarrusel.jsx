import { ContBanner01 } from './ContBanner01';

import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

import "./BannerCarrusel.css"

import p5 from "../../img/pa05.jpg"
import p12 from "../../img/pa12.jpg"

export function BannerCarrusel () {
    return (
      <Container fluid className="carrusel p-0">
        <Carousel>
          <Carousel.Item className='hero-section'>
            <ContBanner01></ContBanner01>
          </Carousel.Item>
          <Carousel.Item>
            <Image className='imagenesb' src={p5} fluid />;
          </Carousel.Item>
          <Carousel.Item>
            <Image className='imagenesb' src= {p12} fluid />;
          </Carousel.Item>
        </Carousel>
      </Container>
    );
}