import React from 'react'
import Sede from '../Pagina detalles/Sede';


const SedesCards = ({sedes}) => {
  return (
    <div>
        <h2 className='tituloSedesPrincipal'> Nuestras Sucursales</h2>

        <div className='TarjetasSedes'>
            {sedes.map((sede) => < Sede key={sede.id} sede={sede} />) }

        </div>
        
    </div>
  )
}

export default SedesCards