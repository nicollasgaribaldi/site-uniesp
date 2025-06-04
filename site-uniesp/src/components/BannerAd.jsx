import React from 'react'
import { Carousel, Container } from 'react-bootstrap'

const BannerAd = () => {
  return (
    <Container className="my-4 p-0 mb-5" fluid>
      <Carousel 
        fade 
        interval={5000} 
        controls={true} 
        indicators={true}
        style={{ height: '500px', overflow: 'hidden' }} // Altura ajustável
      >
        {/* Primeiro slide */}
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src="/banner1.png" // Verifique o nome exato do arquivo
            alt="Vestibular 2025.2"
            style={{ 
              borderRadius: '8px',
              objectFit: 'cover',
              width: '100%',
              height: '100%'
            }}
          />
          <Carousel.Caption>
            <h3>Vestibular 2025.2</h3>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Segundo slide */}
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src="/banner2.png" // Verifique o nome exato do arquivo
            alt="Inova Uniesp 2025"
            style={{ 
              borderRadius: '8px',
              objectFit: 'cover',
              width: '100%',
              height: '100%'
            }}
          />
          <Carousel.Caption>
            <h3>Inova Uniesp 2025</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}

export default BannerAd