import React from 'react'
import imagen from '../../../img/Otras/sedes/Principal.jpg'

const HeaderSucursales = () => {
  return (
    <div className='ContenedorHeaderSucursales'>

        <div className="titulosSucursales">
            <h2>Visita nuestas sedes</h2>
            <p>Veni a ver tu auto</p>
        </div>
        <div className="imagenSucursales">
            <img src={imagen} alt="imagen" />
        </div>


    </div>
  )
}

export default HeaderSucursales