import Listado from '@/components/Listado.jsx'
import { getServiciosCaracteristicas } from '@/utils/dataUtils.js'
import './para-quienes.css'

const ParaQuienes = () => {
  const caracteristicas = getServiciosCaracteristicas('items')

  return (
    <section className='paraQuienes'>
      <h2 className='titleH2'>
        ¿A Quiénes Están Dirigídos nuestros servicios?
      </h2>
      <div className='container'>
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
    </section>
  )
}
export default ParaQuienes
