import React, { useEffect, useState, useRef } from 'react'
import datosCarrete from '../datosjson/dataCarrete'
import { Link } from 'react-router-dom'



const Slider = () => {


    const desliza = useRef([null])
    
    const siguiente = ()=> {
        
            if(desliza.current.children.length > 0){
                desliza.current.style.transition = `3000ms ease-out all`;
                desliza.current.style.transform = `translateX(-530px)`;
    }
    }

    const anterior = ()=> {
       
        if(desliza.current.children.length > 0){
            desliza.current.style.transition = `3000ms ease-out all`;
            desliza.current.style.transform = `translateX(530px)`;
            }
        }

    const [cards, setCards] = useState ([])


    useEffect (() => {
        datosCarrete()
            .then((res) => {
                setCards(res)
        })
    },[])



  return (



    <div className="contedorSlider">
        <h1 className='SubtituloHeader'>Las mejores opciones</h1>
        <div className='card'   >

            
                
            <div className="card2" ref={desliza}>
                
                    {cards.map((card) => 
                
                <div  key={card.id}   className='tarjeta-Carrete'> 
                    

                    <div  className="contenedor-imagen-carrete">
                        <img src={card.imagen1} alt={card.titulo}  className='imagen-carrete'/>
                    </div>
                    <div  className="texto-carrete">
                        <h3>{card.titulo}</h3>
                        <p>{card.descripcion}</p>
                    </div>
                
                
                </div> )}
            </div>



            <div className="botones-carrete">
                    <button onClick={anterior}>{'<'} </button>
                    <button onClick={siguiente}>{'>'} </button>
            </div>
        </div>
        <Link to="/autos" >
                      <button className='btnHeaderCompra btnSlider'>  Compra tu auto </button> 
        </Link>
    </div>
  )
}

export default Slider