import { useContext } from 'react'
import { StoreContext } from '@/context/store'
import {
  getEquipos,
  getEquiposCaracteristicas,
  scrollToTop,
} from '@/utils/dataUtils.js'

import Listado from '@/components/Listado.jsx'
import Features from '@/components/Features.jsx'

import equipo from '@/assets/img/impresora-multifuncion.webp'
import puntosIzq from '@/assets/img/puntos.svg'

import './multifuncion.css'

const Multifuncion = () => {
  const { setMessage, textAreaRef } = useContext(StoreContext)

  const items = getEquipos('items')
  const caracteristicas = getEquiposCaracteristicas('items')
  return (
    <section className='multifuncion'>
      <h3 className='titleH3'>Alquiler de Equipos Multifunción</h3>
      <div className='puntosIzq'>
        <img className='img-fluid' src={puntosIzq} alt='puntos izquierdo' />
      </div>
      <div className='container-fluid'>
        <div className='row contentSuperior'>
          <div className='col-md-5 contentEquipo text-center'>
            <img
              className='img-fluid equipo'
              src={equipo}
              alt='alquiler de equipos multifuncion'
            />
          </div>
          <div className='col-md-7'>
            <div className='row'>
              {items.map(item => (
                <Features key={item.id} item={item} col='col-sm-6 col-lg-4' />
              ))}
            </div>
          </div>
        </div>

        <div className='row contentInferior'>
          <div className='col-md-10 offset-md-1 col-lg-8 offset-lg-2'>
            <div className='row'>
              <div className='col-md-6'>
                {caracteristicas.map(item => (
                  <Listado key={item.id} item={item} col={'izq'} />
                ))}
              </div>
              <div className='col-md-6'>
                {caracteristicas.map(item => (
                  <Listado key={item.id} item={item} col={'der'} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-12 text-center'>
            <button
              onClick={() =>
                scrollToTop(
                  setMessage,
                  'Necesito mas información sobre los planes de alquiler de equipos multifunción...',
                  textAreaRef.current,
                )
              }
              className='btnLanding btn transition'
            >
              SOLICITALO HOY MISMO
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Multifuncion
