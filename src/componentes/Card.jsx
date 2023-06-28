import React from 'react'
import { Link } from 'react-router-dom'
const Card = ({autos}) => {
  
  return (

    <div className='contenedorCard'>

        <img src={autos.imagen} className='img' alt={autos.titulo} /> 
        <div className='cardTexto'>
            <h3>{autos.titulo}</h3>
            
            <a href={`/autos/${autos.id}`}> ver mas </a> 
            <p>$ {autos.precio}</p>
            <p>Marca <br />{autos.categoria}</p>
        </div>
    </div>
  )
}

export default Card