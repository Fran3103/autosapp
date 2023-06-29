import React, { useEffect, useState } from 'react'
import datosCarrete from '../dataCarrete'
import CardsCarretes from './CardsCarretes'


const ContenedorCarretes = () => {

  const  [carretes, setCarretes ] = useState ([])


    
    useEffect (() => {
        datosCarrete()
            .then((res) => {
                setCarretes(res)
        })
    },[])

  return (
    <div className='contenedor-carrete'>
        {carretes && <CardsCarretes carretes={carretes} />}
    </div>
  )
}

export default ContenedorCarretes