import React from 'react'
import Header from './Header'
import Slider from '../Carpeta-Carretes/Slider'
import VentadeAuto from './VentadeAuto'
import ContactoPrincipal from './ContactoPrincipal'
import SedesContenedor from './SedesContenedor'

const Principal = () => {
  return (
    <div>
        <Header/>
        <Slider/>
        <VentadeAuto/> 
        <ContactoPrincipal/>
        <SedesContenedor/>
    </div>
  )
}

export default Principal