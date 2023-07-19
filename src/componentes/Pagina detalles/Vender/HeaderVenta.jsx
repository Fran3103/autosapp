import React from 'react'
import imagen from '../../../img/Otras/ventas/headerVentas.jpg'


const HeaderVenta = () => {
  return (
    <div className='contenedorHeaderVentas'>
        <div className="textoVentas">
            <h1>Cotizá y vendé tu auto en 1 día</h1>
            <p>¡Olvidate de la burocracia! Cambiá o vendé online ¡en menos de 24 hrs!</p>
            <button>Cotizar auto</button>
        </div>
        <div className="imagenVentas">
            <img src={imagen}alt="imagen" />
        </div>
    </div>
  )
}

export default HeaderVenta