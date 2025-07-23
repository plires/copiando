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
  return (
    <section className='home'>
      <Slide />
      <Digitalizacion />
      <Multifuncion />
      <OtrosServicios />
      <ParaQuienes />
      <NuestrosClientes />
      <Resenas />
      <CTAAsesoria />
    </section>
  )
}

export default Home
