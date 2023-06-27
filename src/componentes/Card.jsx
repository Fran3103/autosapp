import React from 'react'

const Card = ({autos}) => {
  console.log(autos.imagen)
  return (

    <div className='contenedorCard'>

        <img src={autos.imagen} className='img' alt={autos.titulo} /> 
        <div className='cardTexto'>
            <h3>{autos.titulo}</h3>
            <p>
                {autos.descripcion}
            </p>
            <p>$ {autos.precio}</p>
            <p>Marca <br />{autos.categoria.nombre}</p>
        </div>
    </div>
  )
}

export default Card