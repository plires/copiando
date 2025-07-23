import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import { scrollToSection } from '@/utils/dataUtils'

import logoLarge from '@/assets/img/logo-copiando.webp'
import logoSmall from '@/assets/img/logo-copiando-small.webp'
import IconHumberguer from '@/components/commons/IconHumberguer'
import CloseHumberguer from '@/components/commons/CloseHumberguer'

import '@/components/commons/header.css'

const Header = () => {
  const headerElement = useRef()
  const navElement = useRef()

  const [isNavMobileOpen, setIsNavMobileOpen] = useState(false)
  const [navMobile, setNavMobile] = useState(IconHumberguer)
  const [logo, setLogo] = useState(logoLarge)

  const changeIconMobile = () => {
    if (isNavMobileOpen) {
      setNavMobile(IconHumberguer)
      setIsNavMobileOpen(false)
      navElement.current.classList.remove('open')
    } else {
      setNavMobile(CloseHumberguer)
      setIsNavMobileOpen(true)
      navElement.current.classList.add('open')
    }
  }

  const closeNavMobile = () => {
    setIsNavMobileOpen(false)
    setNavMobile(IconHumberguer)
    navElement.current.classList.remove('open')
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY

      if (scrollPosition > 100) {
        headerElement.current.classList.add('fixed')
        setLogo(logoSmall)
      } else {
        headerElement.current.classList.remove('fixed')
        setLogo(logoLarge)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className='transition' ref={headerElement}>
      <section className='content_logo'>
        <Link to='/' onClick={() => closeNavMobile()}>
          <img
            className='logo transition img-fluid'
            src={logo}
            alt='logo copiando'
          />
        </Link>
      </section>
      <nav className='transition' ref={navElement}>
        <ul>
          <li>
            <Link
              className='transition anton'
              to='/'
              onClick={() => {
                changeIconMobile()
                scrollToSection('digitalizacion')
              }}
            >
              Digitalización de documentos
            </Link>
          </li>
          <li>
            <Link
              className='transition anton'
              to='/'
              onClick={() => {
                changeIconMobile()
                scrollToSection('multifuncion')
              }}
            >
              Alquiler de equipos multifunción
            </Link>
          </li>
          <li>
            <Link
              className='transition anton'
              to='/'
              onClick={() => {
                changeIconMobile()
                scrollToSection('servicios')
              }}
            >
              Otros Servicios
            </Link>
          </li>
        </ul>
      </nav>
      <span onClick={() => changeIconMobile()}>{navMobile}</span>
    </header>
  )
}

export default Header
