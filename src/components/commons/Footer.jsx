import logo from '@/assets/img/logo-copiando-byn.webp'

import './footer.css'

const Footer = () => {
  return (
    <footer className='container-fluid'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3 left'>
            <img
              className='logoAfa img-fluid'
              src={logo}
              alt='logo afa color'
            />
          </div>
          <div className='col-md-9 right'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nam
            corporis neque repellendus illum laborum nesciunt recusandae, esse
            earum adipisci dignissimos aliquid dolorum dolores ipsam ipsum
            aliquam excepturi sapiente. Enim?
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
