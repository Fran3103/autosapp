import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

const ReservaTurno = () => {
  return (
    <div  className='ContenedorReserva'>
        <div className="textoReserva">
            <h2>
                Elegí el día, la hora y la sede para el service de tu auto
            </h2>
            <p>Te ayudamos a reservar un turno por Whatsapp.</p> 
            <button> <FaWhatsapp/> Reservar turno</button>   
        </div>

        <h2 className='subTituloReserva'> Acercá tu auto a Kavak y retiralo en las mejores condiciones
        </h2>
    </div>
  )
}

export default ReservaTurno