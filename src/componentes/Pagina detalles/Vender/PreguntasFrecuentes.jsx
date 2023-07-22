import React from 'react'
import {IoIosArrowDown} from "react-icons/io";
const PreguntasFrecuentes = () => {


            
            

  return (
    <div className='ContenedorPF'>
        <h2>Preguntas frecuentes</h2>
        <div className="preguntasContenedor">
            <div className="pregunta">
               <div className="txtPregunta">
                    <details >
                        <summary className="textoPregunta">

                        <p>
                            ¿Cómo funciona una venta con Kavak?
                        </p>
                    <div className="flechas">
                        <IoIosArrowDown  className='svgDown'/>
                        

                    </div>
                        </summary>
                    <p  className='Respuesta'>
                        Te ofrecemos dos formas de vender tu auto: compra inmediata por transferencia o entrega en parte de pago por un auto Kavak. ¡Vos elegís!
                    </p>
                    </details>
               </div>
               
                <hr />
            </div>
            
            <div className="pregunta">
                <div className="txtPregunta">
                    <details >
                        <summary  className="textoPregunta">

                        <p>
                        ¿Cómo recibo una cotización por mi auto?
                        </p>
                    <div className="flechas">
                    <IoIosArrowDown  className='svgDown'/>
                      

                    </div>
                        </summary>
                    <p className='Respuesta'>Es muy fácil y demora menos de 1 minuto. Entrá en la sección "Vendé tu auto" y respondé las preguntas sobre tu auto. Al finalizar, si el auto cumple con los parámetros de Kavak, vas a recibir una cotización de forma instantánea, y coordinaremos una inspección para establecer el precio final en función del estado real de tu auto. ¡Fácil y rápido!
                    </p>
                    </details>

               </div>
                 <hr />
               
            </div>
           
            <div className="pregunta">
               
                <div className="txtPregunta">
                    <details >
                        <summary className="textoPregunta">

                        <p>¿Qué documentación necesito para vender el auto?
                        
                        </p>
                    <div className="flechas">
                    <IoIosArrowDown  className='svgDown'/>
                       

                    </div>
                        </summary>
                    <p className='Respuesta'>Hay mucha documentación en este proceso. Lo sabemos. Nuestro equipo especializado de gestores y escribanos tiene como misión asegurar que todos los documentos estén en orden para el momento de la venta. Para empeza vamos a necesitar: Cédula verde y azules, Título del auto, VTV Vigente, Grabado de autopartes, Verificación policial, y el libre deuda patente e infracciones. Pero no te preocupes, podemos guiarte para resolver todo!
                    </p>
                    </details>
               </div>
            
              
                <hr />
            </div>
            
            <div className="pregunta">
                
                <div className="txtPregunta">
                    <details >
                        <summary className="textoPregunta">

                        <p>¿Se puede hacer el chequeo de mi auto a domicilio? 

                        </p>
                    <div className="flechas">
                    <IoIosArrowDown className='svgDown'/>
                       

                    </div>
                        </summary>
                    <p className='Respuesta'>Vos elegís si nos acercamos a inspeccionar tu auto a domicilio, o venís a nuestro centro de inspección. La inspección dura 1 hora, y necesitamos que estés presente únicamente al inicio para recibirnos y al final para la prueba de manejo, pero podés quedarte la inspección completa si preferís (aplican términos y condiciones).
                    </p>
                    </details>
               </div>
                <hr />
            </div>
           
            <div className="pregunta">
             

                <div className="txtPregunta">
                    <details >
                        <summary className="textoPregunta">

                        <p>¿Cómo funciona una “compra inmediata”?
                       
                        </p>
                    <div className="flechas">
                    <IoIosArrowDown  className='svgDown'/>
                        

                    </div>
                         </summary>
                    <p className='Respuesta'>Si toda la documentación se encuentra en regla y tu auto cumple con nuestros estándares de calidad, podemos comprartelo en el momento. (aplican términos y condiciones)
                    </p>
                    </details>
               </div>
        
                 <hr />
            </div>
           
            <div className="pregunta">
                <div className="txtPregunta">
                    <details >
                        <summary className="textoPregunta">

                        <p> 
                            ¿Se puede dejar mi auto como parte de pago de un auto Kavak?
                        
                        </p>
                    <div className="flechas">
                    <IoIosArrowDown  className='svgDown'/>
                     

                    </div>
                        </summary>
                    <p className='Respuesta'>Obvio! Si tu auto cumple con los criterios de inspección, te ofrecemos un descuento sobre la compra de tu auto Kavak.
                    </p>
                    </details>
               </div>
               
               
                <hr />
            </div>
        </div>
    </div>
  )
}

export default PreguntasFrecuentes