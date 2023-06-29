import React from 'react'

const TarjetaCarrete = ({carrete}) => {
  return (
    <div className='tarjeta-Carrete'>
        
        <div className="imagen-carrete">
            <img src={carrete.imagen1} alt={carrete.titulo} />
        </div>
        <div className="texto-carrete">
            <h3>{carrete.titulo}</h3>
            <p className="descripcion">
                {carrete.descripcion}
                </p>
        </div>
        

        
    </div>

  )
}

export default TarjetaCarrete