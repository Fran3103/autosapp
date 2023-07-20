import React from 'react'
import HeaderService from './Contrata Service/HeaderService'
import ServicioEspecialista from './Contrata Service/ServicioEspecialista'
import TablaService from './Contrata Service/TablaService'

const Contacto = () => {
  return (
    <div>
        <HeaderService/>
        <ServicioEspecialista/>
        <TablaService/>
    </div>
  )
}

export default Contacto