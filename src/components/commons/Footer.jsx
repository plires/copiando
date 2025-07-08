import logo from '@/assets/img/logo-copiando-byn.webp'
import iso9001 from '@/assets/img/iso-9001.webp'
import iso14001 from '@/assets/img/iso-14001.webp'
import iso27001 from '@/assets/img/iso-27001.webp'

import './footer.css'

const Footer = () => {
  return (
    <footer className='container-fluid'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4 contentLogo'>
            <img className='img-fluid' src={logo} alt='logo footer' />
          </div>
          <div className='col-md-8 contentLogosIso'>
            <img className='img-fluid' src={iso9001} alt='iso9001' />
            <img className='img-fluid' src={iso14001} alt='iso14001' />
            <img className='img-fluid' src={iso27001} alt='iso27001' />
          </div>
        </div>
        <div className='row contentYear'>
          <div className='col-md-12'>
            All Rights Reserved {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
