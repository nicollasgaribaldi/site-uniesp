import React from 'react'
import { Carousel, Container } from 'react-bootstrap'

const BannerAd = () => {
  return (
    <Container className="my-4 p-0" fluid>
        <Carousel fade interval={5000} controls={true} indicators={true}>

            {/* First slide */}
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/banner1.jpg"
                    alt="Vestibular 2025.2"
                    style={{ borderRadius: '8px' }}
                />
            </Carousel.Item>

            {/* Second slide */}
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/banner2.jpg"
                    alt="Inova Uniesp 2025"
                    style={{ borderRadius: '8px' }}
                />
            </Carousel.Item>

        </Carousel>
    </Container>)
}

export default BannerAd