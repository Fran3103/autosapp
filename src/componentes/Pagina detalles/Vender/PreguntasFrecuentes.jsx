import React, { useEffect, useState } from 'react'
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
const PreguntasFrecuentes = () => {


            const [VerRespuesta , SetVerRespuesta] = useState([" respuesta noVisible"])
            const [VerFlechaArriba , SetFlechaArriba] = useState([" noVisible"])
            const [VerFlechaAbajo , SetFlechaAbajo] = useState([" visible"])


            const ver = () => {
                
                    SetVerRespuesta("respuesta visible")
                    SetFlechaArriba(" visible")
                    SetFlechaAbajo("noVisible")
                
                
            }

            const noVer = () => 
            {
                SetVerRespuesta(" respuesta noVisible")
                SetFlechaArriba("noVisible")
                SetFlechaAbajo("visible")
            }

            
            

  return (
    <div className='ContenedorPF'>
        <h2>Preguntas frecuentes</h2>
        <div className="preguntasContenedor">
            <div className="pregunta">
               <div className="txtPregunta">
                    <div className="textoPregunta">
                        <p>
                            ¿Cómo funciona una venta con Kavak?
                        </p>
                    </div>
                    <div className="flechas">
                        <IoIosArrowDown className={VerFlechaAbajo} onClick={ver}/>
                        <IoIosArrowUp className={VerFlechaArriba} onClick={noVer}/>

                    </div>
               </div>
                <div className={VerRespuesta}>
                    <p>
                        Te ofrecemos dos formas de vender tu auto: compra inmediata por transferencia o entrega en parte de pago por un auto Kavak. ¡Vos elegís!
                    </p>
                </div>
                <hr />
            </div>
            
            <div className="pregunta">
                <div className="txtPregunta">
                    <div className="textoPregunta">
                        <p>
                        ¿Cómo recibo una cotización por mi auto?
                        </p>
                    </div>
                    <div className="flechas">
                    <IoIosArrowDown className={VerFlechaAbajo} onClick={ver}/>
                        <IoIosArrowUp className={VerFlechaArriba} onClick={noVer}/>

                    </div>
               </div>
     
                <div  className={VerRespuesta}>
                    <p>Es muy fácil y demora menos de 1 minuto. Entrá en la sección "Vendé tu auto" y respondé las preguntas sobre tu auto. Al finalizar, si el auto cumple con los parámetros de Kavak, vas a recibir una cotización de forma instantánea, y coordinaremos una inspección para establecer el precio final en función del estado real de tu auto. ¡Fácil y rápido!

                    </p>
                </div>
                 <hr />
            </div>
           
            <div className="pregunta">
               
                <div className="txtPregunta">
                    <div className="textoPregunta">
                        <p>¿Qué documentación necesito para vender el auto?
                        
                        </p>
                    </div>
                    <div className="flechas">
                    <IoIosArrowDown className={VerFlechaAbajo} onClick={ver}/>
                        <IoIosArrowUp className={VerFlechaArriba} onClick={noVer}/>

                    </div>
               </div>
            
                <div  className={VerRespuesta}>

                    <p>Hay mucha documentación en este proceso. Lo sabemos. Nuestro equipo especializado de gestores y escribanos tiene como misión asegurar que todos los documentos estén en orden para el momento de la venta. Para empeza vamos a necesitar: Cédula verde y azules, Título del auto, VTV Vigente, Grabado de autopartes, Verificación policial, y el libre deuda patente e infracciones. Pero no te preocupes, podemos guiarte para resolver todo!

                    </p>
                </div>
                <hr />
            </div>
            
            <div className="pregunta">
                
                <div className="txtPregunta">
                    <div className="textoPregunta">
                        <p>¿Se puede hacer el chequeo de mi auto a domicilio? 

                        </p>
                    </div>
                    <div className="flechas">
                    <IoIosArrowDown className={VerFlechaAbajo} onClick={ver}/>
                        <IoIosArrowUp className={VerFlechaArriba} onClick={noVer}/>

                    </div>
               </div>
      
                <div  className={VerRespuesta}>
                    <p>Vos elegís si nos acercamos a inspeccionar tu auto a domicilio, o venís a nuestro centro de inspección. La inspección dura 1 hora, y necesitamos que estés presente únicamente al inicio para recibirnos y al final para la prueba de manejo, pero podés quedarte la inspección completa si preferís (aplican términos y condiciones).

                    </p>
                </div> 
                <hr />
            </div>
           
            <div className="pregunta">
             

                <div className="txtPregunta">
                    <div className="textoPregunta">
                        <p>¿Cómo funciona una “compra inmediata”?
                       
                        </p>
                    </div>
                    <div className="flechas">
                    <IoIosArrowDown className={VerFlechaAbajo} onClick={ver}/>
                        <IoIosArrowUp className={VerFlechaArriba} onClick={noVer}/>

                    </div>
               </div>
          
                <div className={VerRespuesta}>
                    <p>Si toda la documentación se encuentra en regla y tu auto cumple con nuestros estándares de calidad, podemos comprartelo en el momento. (aplican términos y condiciones)

                    </p>
                </div>
                 <hr />
            </div>
           
            <div className="pregunta">
                <div className="txtPregunta">
                    <div className="textoPregunta">
                        <p> 
                            ¿Se puede dejar mi auto como parte de pago de un auto Kavak?
                        
                        </p>
                    </div>
                    <div className="flechas">
                    <IoIosArrowDown className={VerFlechaAbajo} onClick={ver}/>
                        <IoIosArrowUp className={VerFlechaArriba} onClick={noVer}/>

                    </div>
               </div>
               
                <div className={VerRespuesta}>
                    <p>Obvio! Si tu auto cumple con los criterios de inspección, te ofrecemos un descuento sobre la compra de tu auto Kavak.

                    </p>
                </div>
                <hr />
            </div>
        </div>
    </div>
  )
}

export default PreguntasFrecuentes