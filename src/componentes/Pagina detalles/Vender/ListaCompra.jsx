import React from 'react'
import {IoIosArrowDown} from "react-icons/io";

const ListaCompra = () => {
  return (
    <div >
         <h3 className='tituloPreguntas vista'>Compra</h3>
                  
                <div className="CompraPreguntas">
                 <div className="Columna">
                    <div className="preguntaCompra">
                          <details className='Pregunta'>
                        
                            <summary className='summary'><p>¿Por qué comprar un auto en Kavak?</p><div className="iconoPregunta">
                            
                            <IoIosArrowDown className='svgDown'/>
                

                          </div></summary>
                          <p className='Respuesta'>Kavak nació para que puedas vender tu auto o comprar uno usado garantizado de forma segura. Ofrecemos esta alternativa porque sabemos lo complejo y poco transparente que es este proceso (tanto con particulares como con concesionarias). Queremos que sea muy fácil para vos!</p>
                      
                        
                          </details>
                          <hr />
                        </div>
                      <div className="pregunyaCompra">
                      <details >
                        <summary className='summary'><p>¿Porqué es buen negocio comprar un auto usado?</p><div className="iconoPregunta">
                          
                          <IoIosArrowDown className='svgDown'/>
                   

                        </div></summary>
                        
                          <p className='Respuesta'>Cuando compras un auto nuevo, éste pierde más del 20% de su valor al sacarlo del concesionario. En Kavak podés encontrar ese mismo auto por 40% menos, 3 años después y con apenas 40.000 Kilómetros, sabiendo que estás comprando un auto de calidad.</p>
                        
                        
                      </details>
                        <hr />
                      </div>
                      <div className="preguntaCompra">
                      <details>
                        <summary className='summary'><p>¿Como hace Kavak para asegurar la calidad? ¿Quién hace el chequeo?</p>
                        <div className="iconoPregunta">
                          
                          <IoIosArrowDown className='svgDown'/>
                       

                        </div>


                        </summary>
                        <p className='Respuesta'>Todos los autos que ves en la web pasaron por nuestro riguroso chequeo de 240 puntos, para asegurar la máxima calidad de producto. Aunque un auto usado puede tener pequeños detalles de uso diario, la condición mecánica del auto tiene que ser impecable. Nuestros inspectores son profesionales con larga experiencia en el mundo del automóvil (peritos mecánicos o ingenieros automotrices con experiencia en talleres), y conocen las particularidades de cada marca y modelo.</p>

                      </details>
                        <hr />
                      </div>
                      <div className="preguntaCompra">
                      <details >
                        <summary className='summary'>
                          <p>¿Es verdad que puedo comprar el auto online y me lo envían a domicilio?</p>
                          <div className="iconoPregunta">
                          
                          <IoIosArrowDown className='svgDown'/>
                       

                        </div>
                        </summary>
                        <p className='Respuesta'>Así es. Hacé tu compra online y el equipo de Kavak se ocupa del resto por vos! Desde los trámites hasta el seguro y financiamiento. Coordinamos con vos el día y horario, y enviamos gratis el auto a nuestros clientes en CABA y GBA. (aplican términos y condiciones)</p>
                      </details>
                        <hr />
                      </div>
                    <div className="preguntaCompra">
                    <details >
                        <summary className='summary'>
                          <p>¿Qué documentación verifica Kavak para saber que los papeles están en orden?</p>
                          <div className="iconoPregunta">
                          
                          <IoIosArrowDown className='svgDown'/>
           

                        </div>
                        </summary>
                        <p className='Respuesta'>Nuestro trabajo incluye comprobar que el auto no tenga multas ni patentes pendientes a pagar, y que tu próximo auto no tenga inhibiciones, prendas anteriores o problemas legales a través del informe de dominio histórico emitido directamente por Dirección Nacional de los Registros de la Propiedad del Automotor.</p>

                      </details>
                        <hr />
                    </div>
                      <div className="preguntaCompra">
                      <details >
                        <summary className='summary'>
                          <p>¿Cómo sé que estoy pagando un precio justo por mi auto? ¿El precio es negociable?</p>
                          <div className="iconoPregunta">
                          
                          <IoIosArrowDown className='svgDown'/>
                 

                        </div>
                        </summary>
                        <p className='Respuesta'>Utilizamos herramientas digitales de análisis de oferta y demanda y nuestra inspección detallada para determinar un precio objetivo. Por eso el precio no es negociable.</p>

                      </details>
                        <hr />
                      </div>
                      <div className="preguntaCompra">
                      <details >
                        <summary className='summary'>
                          <p>¿Cuánto es el costo de transferencia? ¿Cómo se calcula?</p>
                          <div className="iconoPregunta">
                        
                          <IoIosArrowDown className='svgDown'/>
                        

                          </div> 
                        </summary>
                          <p className='Respuesta'>La transferencia es un gasto administrativo obligatorio y lo establece la DNRPA a partir de la tabla de valuación de automotores de ACARA. Esto incluye todos los costos de la transferencia (aranceles, sellos, formularios, título, cédulas, legalizaciones), y su valor se estima en 10-12% del valor de tu auto. Queremos ser 100% transparentes y diferenciarnos de algunos intermediarios que “disfrazan” este valor para sacarte más plata.</p>
                      </details>
                        <hr />
                      </div>
                  </div>  
                 <div className="Columna">
                  <div className="preguntaCompra">
                    <details >
                      <summary className='summary'>
                        <p>¿Cuánto me cuesta la patente de mi auto?</p>
                        <div className="iconoPregunta">
                        
                        <IoIosArrowDown className='svgDown'/>
                      

                      </div>
                      </summary>
                      <p className='Respuesta'>La patente de tu auto cuesta al año entre 3 y 5% del valor de tu auto en la tabla de valuación de ACARA.</p>


                    </details>
                      <hr />
                    </div>
                    <div className="preguntaCompra">
                    <details >
                      <summary className='summary'>
                        <p>¿Cómo funciona la Cobertura Mecánica Kavak?</p>
                        <div className="iconoPregunta">
                        
                        <IoIosArrowDown className='svgDown'/>
                  
                      </div>
                      </summary>
                      <p className='Respuesta'>Nosotros nos ocupamos de las reparaciones correspondientes a nuestra cobertura mecánica. El certificado cubre gastos de reparación y repuestos en el motor, transmisión, tracción delantera, y tracción trasera, que son los gastos más significativos que pudiera presentar un vehículo, y por los que nos hacemos cargo en caso de surgir. Para que, aunque puedan surgir inconvenientes en la ruta, estés tranquilo que Kavak te tiene cubierto.</p>

                    </details>
                      <hr />
                    </div>
                    <div className="preguntaCompra">
                    <details >
                      <summary className='summary'>
                        <p>¿Puedo dejar mi auto como parte de pago de un auto Kavak?</p>
                        <div className="iconoPregunta">
                        
                        <IoIosArrowDown className='svgDown'/>
                     

                      </div>
                      </summary>
                      <p className='Respuesta'>Obvio! Si tu auto cumple con los criterios de inspección, te ofrecemos un descuento sobre la compra de tu auto Kavak.</p>
                    </details>
                      <hr />
                    </div>
                    <div className="preguntaCompra">
                    <details >
                      <summary className='summary'>
                        <p>¿Me ayudan a conseguir financiamiento y seguro?</p>
                        <div className="iconoPregunta">
                        
                        <IoIosArrowDown className='svgDown'/>
                       

                      </div>
                      </summary>
                        <p className='Respuesta'>¡Por supuesto! Nos encargamos de todo el proceso de compra para que vos sólo te preocupes por disfrutar de tu auto Kavak. Ofrecemos las mejores condiciones para nuestros clientes mediante alianzas con varias instituciones, bancos y aseguradoras.</p>
                    </details>
                      <hr />
                    </div>
                 </div>
                  
                </div>
    </div>
  )
}

export default ListaCompra