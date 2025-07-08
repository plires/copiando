import asesoria from '@/assets/img/asesoria.webp'

import styles from './cta-asesoria.module.css'

const CTAAsesoria = ({ onContactoClick }) => {
  return (
    <section className={`${styles.ctaAsesoria}`}>
      <div className='puntos'></div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h2 className='titleH2'>
              Solicitá una asesoría gratuita y<br />
              empezá a digitalizar tu empresa hoy
            </h2>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-12'>
            <div className={`${styles.contentData}`}>
              <img
                className={`img-fluid ${styles.imgAsesoria}`}
                src={asesoria}
                alt='asesoria'
              />
              <div className={`${styles.message}`}>
                Somos tu partner en
                <br />
                transformación digital.
              </div>
            </div>
            <button
              onClick={onContactoClick}
              className='btnLanding btn transition'
            >
              SOLICITÁ ASESORÍA HOY
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTAAsesoria
