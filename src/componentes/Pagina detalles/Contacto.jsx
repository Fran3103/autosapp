import React from 'react'
import HeaderService from './Contrata Service/HeaderService'
import ServicioEspecialista from './Contrata Service/ServicioEspecialista'
import TablaService from './Contrata Service/TablaService'
import ReservaTurno from './Contrata Service/ReservaTurno'
import SedesContenedor from './SedesContenedor'

const Contacto = () => {
  return (
    <div>
        <HeaderService/>
        <ServicioEspecialista/>
        <TablaService/>
        <ReservaTurno/>
        <SedesContenedor/>
    </div>
  )
}

export default Contacto