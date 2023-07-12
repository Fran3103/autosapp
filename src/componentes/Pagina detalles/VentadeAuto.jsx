import React from 'react'
import { Link } from 'react-router-dom'
import imagen from '../../img/Otras/audi-frente.png';
const VentadeAuto = () => {
  return (
    <div className="contenedorGralAside">
        <div className='contenedorAside'>
            <div className="textoAside">
                <h2>Cambia o vende tu auto</h2>
                <p>
                    Cotizá tu auto y agendá una inspección a domicilio o en nuestra sede más cercana.
                </p>
                <hr />
                <p>
                    Vendé tu auto a un excelente precio de forma segura.
                </p>
                <hr />
                <p>
                    Dejalo en parte de pago y llevate un auto Kavak certificado y con garantía.
                </p>

                <Link to="/vender" >
                        <button className='btnHeaderCompra '>  Vende tu auto </button> 
                </Link>
            </div>
            <div className="imagenAside">
                <img src={imagen} alt="audi" />
            </div>

        </div>
    </div>
  )
}

export default VentadeAuto