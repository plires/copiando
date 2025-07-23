import slideMobile from '@/assets/img/header-mobile.webp'
import slideDesktop from '@/assets/img/header-desktop.webp'
import iconWhatsapp from '@/assets/img/logo-whatsapp.svg'
import { handleWhatsapp } from '@/utils/dataUtils'
import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import { IoCloseCircle } from 'react-icons/io5'

import Formulario from '@/components/commons/Formulario.jsx'

import './slide.css'

const Slide = ({ ref }) => {
  useEffect(() => {
    setWhatsappOpen(handleWhatsapp())
  }, [])

  const [whatsappOpen, setWhatsappOpen] = useState(true)
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
                  {whatsappOpen && (
                    <div className='contentWhatsapp'>
                      <a
                        href={import.meta.env.VITE_WHATSAPP_LINK}
                        target='_blank'
                        rel='noreferrer'
                        className='whatsapp transition'
                      >
                        ¿Preferís hablar?
                        <img
                          className='iconWhatsapp'
                          src={iconWhatsapp}
                          alt='whatsapp'
                        />
                      </a>
                      <IoCloseCircle
                        title='Cerrar whatsapp'
                        className='closeWhatsapp transition'
                        onClick={() => setWhatsappOpen(false)}
                      />
                    </div>
                  )}
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
