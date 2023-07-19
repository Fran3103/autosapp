import React from 'react'

import {  AiFillStar , AiOutlineStar } from "react-icons/ai";

const Testimonios = () => {
  return (
  
    <div className="ContenedorTestimonioGral">
        <h2>Testimonios de personas que vendieron su auto</h2>
        <div className='contenedorTestimonios'>
            
            <div className="testimonio">
                <p className="nombreTestimonio">
                    Alejandro Martin Gallo
                </p>
                <p className="autoTestimonio">
                    Vendió un Renault Sandero Stepway
                </p>
                <div className="estrellas">
                    <div className="estrella"> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiOutlineStar/></div>
                    <p>4.0</p>
                </div>
                <p className="textoTestimonio">
                    Salió todo impecable, cumplieron 100% en todo lo pactado…. Súper rápido todo y la gente siempre muy atenta
                </p>
            </div>
            <div className="testimonio">
                <p className="nombreTestimonio">
                    Adrian Jorge Arcaro
                </p>
                <p className="autoTestimonio">
                    Vendió un Volkswagen Polo
                </p>
                <div className="estrellas">
                    <div className="estrella"> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> </div>
                    <p>5.0</p>
                </div>
                <p className="textoTestimonio">
                    Me gustó todo el proceso de comienzo a fin. Lo fundamental de una empresa es el capital humano, sin esto no funcionaría, así que felicito a Kavak por inculcar a su personal cordialidad y rapidez para resolver todo. Sin ninguna duda y con los ojos cerrados los recomendaría a mis amigos y familiares.
                </p>
            </div>
            <div className="testimonio">
                <p className="nombreTestimonio">
                    Gustavo Claudio Palacio</p>
                <p className="autoTestimonio">
                    Vendió un Toyota Corolla</p>
                <div className="estrellas">
                    <div className="estrella"> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiOutlineStar/></div>
                    <p>4.0</p>
                </div>
                <p className="textoTestimonio">
                    La atención del personal es muy buena. Todo el proceso de venta de mi auto se realizó en forma rápida y cumplieron con todo lo acordado en tiempo y forma. En el transcurso de 2 horas pude resolver la venta de mi auto sin ningún tipo de inconveniente. Entregué el auto el mismo día de la inspección y todo el proceso fue muy transparente.
                </p>
            </div>
        </div>
    </div>
       
  )
}

export default Testimonios