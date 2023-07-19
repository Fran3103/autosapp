import React from 'react'
import { FiAlertCircle} from "react-icons/fi";

const CompramosTuAuto = () => {
  return (
    <div className='contenedorCompramosAuto'>
        <div className="textoCompramosAuto">
            <h3>Compramos tu auto en menos de 24 hrs</h3>
            <p>Conocé las ofertas disponibles para que puedas vender tu seminuevo en el mismo día.</p>
            <button>Vender auto</button>
        </div>
        <div className="ofertas">
            <div className="ofertaInmediata">
                <p>Oferta</p>
                <h4>Inmediata</h4>
                <p>Entregás tu auto y recibís el pago directamente en tu cuenta.</p>
            </div>
            <div className="ofertaIntercambio">
                <p>Oferta</p>
                <h4>Intercambio</h4>
                <p>Entregás tu auto y te llevás un Kavak abonando solo la diferencia.</p>
            </div>
            <p> <FiAlertCircle/>  Las ofertas son variables, sujetas a inspección y cuentan con fecha de vencimiento.</p>
        </div>

    </div>
  )
}

export default CompramosTuAuto