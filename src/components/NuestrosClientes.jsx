import React from 'react'
import Slider from 'react-slick'

import { getLogos, getImageURL } from '@/utils/dataUtils.js'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './nuestros-clientes.css'

const NuestrosClientes = () => {
  const items = getLogos('items')

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
          arrows: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <section className='nuestrosClientes'>
      <h2 className='titleH2'>Nuestros clientes</h2>
      <Slider {...settings}>
        {items.map(item => (
          <article key={item.id} className='contentLogos'>
            <img
              className='img-fluid'
              src={getImageURL(item.srcImg)}
              alt={item.srcImg}
            />
          </article>
        ))}
      </Slider>
    </section>
  )
}
export default NuestrosClientes
