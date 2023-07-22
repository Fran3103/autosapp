import React from 'react'
import { useEffect, useState } from 'react';
import datosSede from "../../datosjson/dataSedes";
import GeneralVentana from './GeneralVentana';



const VentanasGenerales = () => {

    const [Sedes, setSedes] = useState ([]);


useEffect (() => {
      datosSede()
        .then((res) => {
          setSedes(res)
        })
        
    },[])


  return (
    <div>

        {Sedes && <GeneralVentana  sedes={Sedes} />}
         


    </div>
  )
}

export default VentanasGenerales