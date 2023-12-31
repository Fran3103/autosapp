import React, { useEffect, useState } from 'react'
import Detalle from './Detalle';
import { detalleid } from '../datosjson/data';
import { useParams } from 'react-router-dom';


const DetalleContainer = () => {

    const [detalle , setDetalle] = useState (null);
    const id = useParams().id;
    

    useEffect(() => {
        detalleid(Number(id))
            .then((res) =>{
                setDetalle(res)
            })
    }, [id])

  return (
    <div>

           {detalle && <Detalle detalle={detalle}/>}
    </div>
  )
}

export default DetalleContainer