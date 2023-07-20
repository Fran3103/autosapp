import React from 'react'
import Sede from '../Pagina detalles/Sede';


const SedesCards = ({sedes}) => {
  return (
    <div>
        

        <div className='TarjetasSedes'>
            {sedes.map((sede) => < Sede key={sede.id} sede={sede} />) }

        </div>
        
    </div>
  )
}

export default SedesCards