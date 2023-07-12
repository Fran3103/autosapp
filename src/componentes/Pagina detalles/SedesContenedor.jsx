import React from 'react'
import { useEffect, useState } from 'react';
import datosSede from "../datosjson/dataSedes";
import SedesCards from './SedesCards';

const SedesContenedor = () => {

    const [Sedes, setSedes] = useState ([]);


useEffect (() => {
      datosSede()
        .then((res) => {
          setSedes(res)
        })
        
    },[])


  return (
    <div>

        {Sedes && <SedesCards  sedes={Sedes} />}


    </div>
  )
}

export default SedesContenedor