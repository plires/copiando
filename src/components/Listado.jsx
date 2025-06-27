import tilde from '@/assets/img/tilde.svg'

import './listado.css'

const Listado = ({ item, col }) => {
  return (
    <section className='listado'>
      <div key={item.id} className='caracteristicas'>
        {item.col === col && (
          <p>
            <img
              className='img-fluid tilde'
              src={tilde}
              alt={`tilde ${item.title}`}
            />
            {item.title}
          </p>
        )}
      </div>
    </section>
  )
}
export default Listado
