import React from 'react'
import HeaderVenta from './Vender/HeaderVenta'
import AsideVentas from './Vender/AsideVentas'
import CompramosTuAuto from './Vender/CompramosTuAuto'
import Testimonios from './Vender/Testimonios'
import PreguntasFrecuentes from './Vender/PreguntasFrecuentes'

const Vender = () => {
  return (
    <div>
        <HeaderVenta/>
        <AsideVentas/>
        <CompramosTuAuto/>
        <Testimonios/>
        <PreguntasFrecuentes/>
    </div>
  )
}

export default Vender