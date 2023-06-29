import { useState } from "react"
import { Link } from "react-router-dom"
import { detalleid } from "./data"





const Detalle = ({detalle}) => {


  
  return (
    <div className="contenedorPrincipalDetalle">
        <div className='contenedorDetalle'>

            <img src={detalle.imagen} className='img-detalle' alt={detalle.titulo} /> 
            <div className='textoDetalle'>
                <h3>{detalle.titulo}</h3>
                <p>
                    {detalle.descripcion}
                </p>
                <p>Precio $ <span>{detalle.precio}  </span></p>
                <div className='fechas-detalle'>
                      <p>{detalle.año} </p> <hr />
                      <p>{detalle.ubicacion}</p> <hr />
                      <p>{detalle.kilometros}</p>
                    </div>
                <div className="botones">
                  <div className="btn-siguientes">
                    <Link to={`/auto/${detalle.id -1}`}  className="btn">Anterior</Link>
                    <Link to={`/auto/${detalle.id + 1}` } className="btn" >Siguiente</Link>
                  </div>
                  <div className="container-btn-carrito"> 
                    <button className="btn-carrito" >Agregar al Carrito</button>
                  </div>
              </div>
            </div>
            
        </div>
          
        
    </div>
  )
}

export default Detalle