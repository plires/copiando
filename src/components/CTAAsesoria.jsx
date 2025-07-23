import { useContext } from 'react'
import { StoreContext } from '@/context/store'
import { scrollToTop } from '@/utils/dataUtils.js'

import asesoria from '@/assets/img/asesoria.webp'

import styles from './cta-asesoria.module.css'

const CTAAsesoria = () => {
  const { setMessage, textAreaRef } = useContext(StoreContext)

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
              onClick={() =>
                scrollToTop(
                  setMessage,
                  'Quiero digitalizar mi empresa, solicito una asesoría gratuita...',
                  textAreaRef.current,
                )
              }
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
