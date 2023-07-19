import React from 'react'
import {FiKey,FiFileText,FiDollarSign,FiTool} from "react-icons/fi";
const AsideVentas = () => {
  return (
    <div className='contenedorAsideVentas'>
        <h2>Descubrí lo fácil que es vender tu auto en Kavak</h2>
        <div className="cardVentas">
            <div className="iconos">
                <FiKey/>
                <h4>Cotizá tu auto</h4>
                <p>Ingresá los datos de tu auto para que podamos cotizarlo</p>
            </div>
            <div className="iconos">
                <FiFileText/>
                <h4>Elegí una oferta</h4>
                <p>Te brindamos diferentes ofertas para que puedas elegir la mejor</p>
            </div>
            <div className="iconos">
                <FiTool/>
                <h4>Agendá la inspección</h4>
                <p>Programá la hora y el lugar que más te convenga</p>
            </div>
            <div className="iconos">
                <FiDollarSign/>
                <h4>Obtené tu pago</h4>
                <p>Recibí el valor de tu auto en tu cuenta de forma fácil y rápida</p>
            </div>
        </div>
    </div>
  )
}

export default AsideVentas