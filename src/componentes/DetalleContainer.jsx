import React, { useEffect, useState } from 'react'
import Detalle from './Detalle';
import { detalleid } from './data';

const DetalleContainer = ({itemid}) => {

    const [detalle , setDetalle] = useState (null)

    useEffect(() => {
        detalleid(itemid)
            .then((res) =>{
                setDetalle(res)
            })
    }, [itemid])

  return (
    <div>

           {detalle && <Detalle detalle={detalle}/>}
    </div>
  )
}

export default DetalleContainer