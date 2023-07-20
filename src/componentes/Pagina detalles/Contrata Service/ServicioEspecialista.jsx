import React from 'react'
import { AiFillCalendar, AiFillCreditCard, AiFillCar  } from "react-icons/ai";
import imagen from '../../../img/Otras/ford-focus.png'

const ServicioEspecialista = () => {
  return (
    <div className='ContenedorEspecialistasGral'>
        <div className="imagenEspecialista">
            <img src={imagen} alt="imagen" />
        </div>
        <div className="textoEspecialista">
            <h2>Mantené tu auto con el servicio de especialistas y hacé que dure más</h2>
           <div className="ContenedorEspecialistas">
            <div className="ContenedorIconosEspecialista">
                    <div className="iconoEspecialista">
                            <AiFillCalendar/>
                    </div>
                    <div className="textoIconoEspecialista">
                        <p> Reservás un turno sin salir de tu casa

                        </p>
                    </div>
                </div>
                <div className="ContenedorIconosEspecialista">
                    <div className="iconoEspecialista">
                        <AiFillCar/>
                    </div>
                    <div className="textoIconoEspecialista">
                        <p>Retirás tu auto en menos de 3 horas

                        </p>
                    </div>
                </div>
                <div className="ContenedorIconosEspecialista">
                    <div className="iconoEspecialista">
                        <AiFillCreditCard/>
                    </div>
                    <div className="textoIconoEspecialista">
                        <p>Pagás con crédito, débito o transferencia bancaria

                        </p>
                    </div>
                </div>
           </div>
        </div>
    </div>
  )
}

export default ServicioEspecialista