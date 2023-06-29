import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({autos}) => {
  
  

  return (
    <div className='contenedorCard' >
      <Link  to={`/auto/${autos.id}`}>

                <img src={autos.imagen} className='img' alt={autos.titulo} /> 
                <div className='cardTexto'>
                    <h3>{autos.titulo}</h3>
                    <div className='fechas'>
                      <p>{autos.año}</p><hr />
                      <p>{autos.ubicacion}</p> <hr />
                      <p>{autos.kilometros}</p>
                    </div>
                    <p>$ {autos.precio}</p>
                    <p>Marca <br />{autos.categoria}</p>  
                     
                </div>
            </Link>


    </div>
      
  )
}

export default Card