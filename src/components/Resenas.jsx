import Slider from 'react-slick'
import { getResenas } from '@/utils/dataUtils.js'

import Stars from '@/components/Stars.jsx'
import tilde from '@/assets/img/tilde-verde.svg'

import styles from './resenas.module.css'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={`${className} next`}
      style={{
        ...style,
        display: 'block',
        right: '-8px',
        zIndex: 9,
      }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={`${className} prev`}
      style={{
        ...style,
        display: 'block',
        left: '-8px',
        zIndex: 9,
      }}
      onClick={onClick}
    />
  )
}

const Resenas = () => {
  const resenas = getResenas('items')

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 1000,
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <section className={`${styles.sectionResenas}`}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <Slider {...settings}>
              {resenas.map(item => (
                <article key={item.id} className={`${styles.resena}`}>
                  <div className={`${styles.contentResena}`}>
                    <div className={`${styles.contentHeader}`}>
                      <div className={`${styles.data}`}>
                        <p className={`${styles.name}`}>{item.name}</p>
                        <img
                          className={`${styles.tilde}`}
                          src={tilde}
                          alt={`tilde ${item.name}`}
                        />
                        <p className={`${styles.position}`}>{item.position}</p>
                      </div>
                      <p className={`${styles.date}`}>{item.date}</p>
                    </div>
                    <div className={`${styles.contentStar}`}>
                      <Stars resena={item} />
                    </div>
                    <p className={`${styles.description}`}>
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Resenas
