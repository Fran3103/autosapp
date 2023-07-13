import { useParams } from 'react-router-dom';
import Cards from './Cards';
import datos from '../datosjson/data';
import { useEffect, useState } from 'react';
import React from 'react'
const ContainerCards = () => {

const [autos, setAutos] = useState ([]);
const [titulo, setTitulo] = useState(["Autos"])
const categoria = useParams().categoria;


    useEffect(() => {
        datos()
            .then((res) => {
              if(categoria){
                setAutos(res.filter((prod)=> prod.categoria === categoria))
                setTitulo(categoria)

              }else{
                setAutos(res)
                setTitulo("Autos")
              }
              
            })
      
    }, [categoria])

  
    
    // useEffect (() => {
    //   datos()
    //     .then((res) => {
    //       setAutos(res)
    //     })
    // },[])

  return (
    <div className='ContenedorTarjetas'>

        {autos && <Cards  autos={autos} titulo={titulo} />}


    </div>
  )
}

export default ContainerCards