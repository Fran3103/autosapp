import Cards from './Cards';
import datos from './data.js';
import { useEffect, useState } from 'react';

const ContainerCards = () => {

const [autos, setAutos] = useState ([]);



    useEffect(() => {
        datos()
            .then((res) => {
                setAutos(res)
            })
      
    }, [])
    


  return (
    <div className='ContenedorTarjetas'>

        <Cards  autos={autos}/>


    </div>
  )
}

export default ContainerCards