import { useRef } from 'react'
import Slide from '@/components/Slide.jsx'
import Digitalizacion from '@/components/Digitalizacion.jsx'
import Multifuncion from '@/components/Multifuncion.jsx'
import OtrosServicios from '@/components/OtrosServicios.jsx'
import ParaQuienes from '@/components/ParaQuienes.jsx'
import NuestrosClientes from '@/components/NuestrosClientes.jsx'
import Resenas from '@/components/Resenas.jsx'
import CTAAsesoria from '@/components/CTAAsesoria.jsx'

import './home.css'

const Home = () => {
  const contactoRef = useRef(null)
  const scrollAlFormulario = () => {
    contactoRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <section className='home'>
      <Slide ref={contactoRef} />
      <Digitalizacion onContactoClick={scrollAlFormulario} />
      <Multifuncion onContactoClick={scrollAlFormulario} />
      <OtrosServicios onContactoClick={scrollAlFormulario} />
      <ParaQuienes />
      <NuestrosClientes />
      <Resenas />
      <CTAAsesoria onContactoClick={scrollAlFormulario} />
    </section>
  )
}

export default Home
