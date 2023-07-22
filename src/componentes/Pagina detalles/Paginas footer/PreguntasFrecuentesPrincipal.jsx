import React, { useState } from 'react'
import {IoIosArrowDown} from "react-icons/io";
import ListaCompra from '../Vender/ListaCompra';
import ListaVenta from '../Vender/ListaVenta';

const PreguntasFrecuentesPrincipal = () => {

    const [verCompra, setVerCompra] = useState (<ListaCompra/>)
    const [titulo, setTitulo] = useState("tituloLista seleccion")
    const [tituloVenta, setTituloVenta] = useState("tituloLista ")
   

    const clickCompra = () => {

     
        setVerCompra(<ListaCompra/>)
        setTitulo('tituloLista seleccion')
        setTituloVenta('tituloLista ')

    }

    const clickVenta = ()=>{
      setVerCompra(<ListaVenta/>)
      setTituloVenta('tituloLista seleccion')
      setTitulo('tituloLista ')
    }



  return (
    <div className='ContenedorPreguntas'>

            <div className="headerPreguntas">
              <div className="textoPreguntas">
                <h3>PREGUNTAS FRECUENTES</h3>
                <h1>¿Tenés dudas? Te ayudamos a resolverlas</h1>
              </div>
              <div className="imagenPreguntas">
                <img src="https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJhci9hc3NldHMvaW1hZ2VzL2ZhcXMvd2VicC9tYWluLWhlcm8tbGcud2VicCIsImVkaXRzIjp7fX0=" alt="imagen" />
              </div>
            </div>

            <div >
           
                <ul className="contenedorListaPreguntas">
                  <li className={titulo} onClick={clickCompra}>
  
                    <h3>Compra</h3>
                  </li>
                  <li className={tituloVenta} onClick={clickVenta}>
                    <h3 >Venta</h3>
                  </li>
                </ul>
              <div className="contenedorCV"> {verCompra}
                  

              </div> 

            </div>

    </div>
  )
}

export default PreguntasFrecuentesPrincipal