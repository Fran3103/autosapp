import React from 'react'

const Card = ({autos}) => {
  return (

    <div className='contenedorCard'>

        <img src={autos.imagen}/> 
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