import items from '@/data/ventajas-digitalizacion.json'
import equipos from '@/data/equipos.json'
import equiposCaracteristicas from '@/data/equipos-caracteristicas.json'
import serviciosCaracteristicas from '@/data/servicios-caracteristicas.json'
import logos from '@/data/logos.json'
import resenas from '@/data/resenas.json'

export const getItems = key => items[key]
export const getEquipos = key => equipos[key]
export const getEquiposCaracteristicas = key => equiposCaracteristicas[key]
export const getServiciosCaracteristicas = key => serviciosCaracteristicas[key]
export const getLogos = key => logos[key]
export const getResenas = key => resenas[key]

export const scrollToTop = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
}

export const validation = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Ingresá un nombre'
  }
  if (!values.email) {
    errors.email = 'Ingresá tu email'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Ingresá un correo válido'
  }
  if (!values.phone) {
    errors.phone = 'Ingresá un teléfono'
  }
  if (!values.comments) {
    errors.comments = 'Enviá tu consulta'
  }
  return errors
}

export const getImageURL = name => {
  return new URL(`../assets/img/${name}`, import.meta.url).href
}
