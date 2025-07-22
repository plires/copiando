import slideMobile from '@/assets/img/header-mobile.webp'
import slideDesktop from '@/assets/img/header-desktop.webp'
import iconWhatsapp from '@/assets/img/logo-whatsapp.svg'
import { Link } from 'react-router'

import Formulario from '@/components/commons/Formulario.jsx'

import './slide.css'

const Slide = ({ ref }) => {
  return (
    <section data-aos='fade-up' className='slide'>
      <picture>
        <source media='(max-width: 767px)' srcSet={slideMobile} />
        <img
          className='img-fluid imgSlide'
          src={slideDesktop}
          alt='slide copiando'
        />
      </picture>
      <div className='content'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-12 col-lg-10 offset-lg-1'>
              <div className='row contentRow'>
                <div className='col-md-6 contentData'>
                  <h1>
                    Tus Documentos Más <br />
                    Seguros, Más Rápidos y <br />
                    Siempre Disponibles.
                  </h1>
                  <p className='bajada'>
                    Hacé más eficiente tu empresa con nuestros servicios de
                    digitalización de documentos y alquiler de equipos
                    multifunción
                  </p>
                </div>
                <div className='col-md-6 contentForm'>
                  <Formulario ref={ref} />
                  <Link
                    to={import.meta.env.VITE_WHATSAPP_LINK}
                    className='whatsapp transition'
                  >
                    ¿Preferís hablar?
                    <img
                      className='iconWhatsapp'
                      src={iconWhatsapp}
                      alt='whatsapp'
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Slide
