import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col } from "react-bootstrap";

export default function Campos() {
  return (
    <div>
    <Container className='mt-5 mb-5'>
        <Row>
            <Carousel data-bs-theme="">
                <Carousel.Item interval={3000}>
                    <img className="d-block w-100" src="campo1.jpg" alt="carousel1" style={{width:"100%", height:"700px"}} />
                    <Carousel.Caption>
                    <h3 style={{}}>Campo en el parque</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img className="d-block w-100" src="campo2.jpg" alt="carousel2" style={{width:"100%", height:"700px"}} />
                    <Carousel.Caption>
                    <h3 style={{}}>Campo en la montaña</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img className="d-block w-100" src="campo3.webp" alt="carousel3" style={{width:"100%", height:"700px"}}/>
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Row>
    </Container>
    </div>
  )
}
