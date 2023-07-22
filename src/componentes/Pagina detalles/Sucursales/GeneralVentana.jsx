import React from 'react'
import VentanaSucursales from './VentanaSucursales'




const GeneralVentana = ({Sedes}) => {
  return (
    <div>
        

        <div>
            
            {Sedes.map((sede) => < VentanaSucursales key={sede.id} sede={sede} /> ) }

        </div>
       
    </div>
  )
}

export default GeneralVentana