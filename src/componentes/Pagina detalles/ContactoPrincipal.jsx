import React from 'react'
import celular from '../../img/Otras/Celular.webp'
import { Link } from 'react-router-dom'
const ContactoPrincipal = () => {
  return (
   <div className="contenedor">
       <div className='contenedorContactoPrincipalGral'>
        <div className="contenedorContactoPrincipal">
            <div className="imagenContactoPrincipal">
                <img src={celular} alt="celular" />
            </div>
            <div className="textoContactoPrincipal">
                <h2>Consultá tu financiamiento</h2>
                <p>Financiá hasta el 70% de tu auto con los mejores bancos e instituciones</p>
                <Link to="/autos" >
                        <button className='btnHeaderCompra  '>  Ver Autos</button> 
                </Link>
            </div>
        </div>
      

    
    </div>
    <h2 className='tituloSedesPrincipal subtituloReserva2'> Nuestras Sucursales</h2>
   </div>
  )
}

export default ContactoPrincipal