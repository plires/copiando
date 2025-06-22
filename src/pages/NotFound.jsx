import { Link } from 'react-router'
import styles from './not-found.module.css'

const NotFound = () => {
  return (
    <section className={`${styles.section_not_found}`}>
      <h1>Error 404</h1>
      <p>
        Llegaste aquí buscando algo que ya no está. <br />
        contactate con nosotros y te ayudaremos a encontrarlo
      </p>
      <div className='content_btn'>
        <Link to='/' className={`btn ${styles.btnNotFound}`}>
          Seguir Navegando
        </Link>
      </div>
    </section>
  )
}

export default NotFound
