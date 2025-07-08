import { getItems } from '@/utils/dataUtils.js'
import Accordion from '@/components/commons/Accordion.jsx'
import digitalizacionDesktop from '@/assets/img/digitalizacion-documentos-desktop.webp'
import digitalizacionModDesktop from '@/assets/img/digitalizacion-documentos-mod.webp'

import 'bootstrap/dist/js/bootstrap.js'

import './digitalizacion.css'

const Digitalizacion = ({ onContactoClick }) => {
  const items = getItems('items')
  return (
    <section className='digitalizacion'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12 p-0'>
            <h2 className='titleH2'>¿Que ofrecemos?</h2>
            <h3 className='titleH3'>Digitalización de Documentos</h3>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <p className='preguntas'>
              <span>¿Cuánto tiempo</span> tarda el personal de tu empresa
              buscando documentos?
            </p>
            <p className='preguntas'>
              <span>¿Cuánto espacio</span> total ocupan los documentos en papel,
              y qué precio puede tener ese espacio?
            </p>
            <p className='preguntas last'>
              <span>¿Cuántas veces</span> tuviste que rehacer un documento por
              completo por no encontrarlo tras varios intentos?
            </p>
            <h4 className='titleH4'>
              Ventajas de la digitalización de documentos
            </h4>
            <Accordion id='ventajas' items={items} />
          </div>
          <div className='col-md-6 contentImg'>
            <picture>
              <source
                media='(min-width: 768px)'
                srcSet={digitalizacionModDesktop}
              />
              <img
                className='img-fluid'
                src={digitalizacionDesktop}
                alt='digitalizacion de documentos'
              />
            </picture>

            <div className='contentData'>
              <h4 className='titleH4'>
                Hacemos diagnóstico de tus procesos SIN CARGO
              </h4>
              <button
                onClick={onContactoClick}
                className='btnLanding btn transition'
              >
                SOLICITALO HOY MISMO
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Digitalizacion
