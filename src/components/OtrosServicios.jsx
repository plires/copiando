import gestor from '@/assets/img/gestor-documental.webp'
import firma from '@/assets/img/firma-digital.webp'

import './otros-servicios.css'

const OtrosServicios = ({ onContactoClick }) => {
  return (
    <section className='otrosServicios'>
      <h3 className='titleH3'>¿Qué más ofrecemos?</h3>

      <div className='contentGestor'>
        <div className='data'>
          <h4>Gestor Documental</h4>
          <p>
            Un gestor documental es una herramienta que centraliza, organiza y
            almacena documentos digitales. Su principal ventaja es el rápido
            acceso a la información de manera inmediata, generando una mayor
            eficiencia operativa, mejorando la seguridad y la trazabilidad del
            contenido.
          </p>
        </div>
        <div className='contentImg'>
          <img className='img-fluid' src={gestor} alt='gestor documental' />
        </div>
      </div>

      <div className='contentFirma'>
        <div className='contentImg'>
          <img className='img-fluid' src={firma} alt='firma digital' />
        </div>
        <div className='data'>
          <h4>Firma Digital</h4>
          <p>
            La firma digital permite firmar contratos y otros documentos a
            distancia, garantizando la autenticidad, integridad y otorgando
            validez legal. Con este servicio ahorras tiempo y costos, obteniendo
            mayor seguridad en tus transacciones.
          </p>
        </div>
      </div>

      <div className='contentBtn text-center'>
        <button onClick={onContactoClick} className='btnLanding btn transition'>
          SOLICITÁ INFORMACIÓN
        </button>
      </div>
    </section>
  )
}
export default OtrosServicios
