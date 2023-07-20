import React from 'react'
import { BsCheckCircleFill } from "react-icons/bs";


const TablaService = () => {
  return (
    <div className='ContenedorTabla'>
        <h2>El mantenimiento que necesitás en hasta 12 cuotas sin interés</h2>
       
            
 
        <div className="tabla">
            <table className='NavTabla '>
                <tr>
                    <th className="Servicio service">
                       
                            <h2>Servicio</h2>
                            <p className='asterisco'>*El precio final dependerá de la marca y modelo de       tu    auto.</p>
                        
                    </th>
                    <th className="Servicio plata">
                        
                            <h2>Plata</h2>
                            <p>desde</p>
                            <p className='precio'> <span> $</span> 2.404*/mes </p>
                            <p>en 12 cuotas sin interés</p>
                            <button>Elegir servicio</button>
                        
                    </th>
                    <th className="Servicio oro">
                        

                            <h2>Oro</h2>
                            <p>desde</p>
                            <p className='precio'> <span> $</span> 3.582*/mes </p>
                            <p>en 12 cuotas sin interés</p>
                            <button>Elegir servicio</button>
                        
                    </th>
                </tr> 
  
                <tr className='tabla1'>
                    <td>Cambio de aceite y filtro</td>
                    <td><BsCheckCircleFill/></td>
                    <td><BsCheckCircleFill/></td>
                </tr>
                <tr className='tabla2'>
                    <td>Revisión y relleno de niveles</td>
                    <td><BsCheckCircleFill/></td>
                    <td><BsCheckCircleFill/></td>
                </tr>
                <tr className='tabla1'>
                    <td>Revisión de fugas en frenos y refrigeración</td>
                    <td><BsCheckCircleFill/></td>
                    <td><BsCheckCircleFill/></td>
                </tr>
                <tr className='tabla2'>
                    <td>Verificación de embrague y suspensión</td>
                    <td><BsCheckCircleFill/></td>
                    <td><BsCheckCircleFill/></td>
                </tr>
                <tr className='tabla1'>
                    <td>Chequeo de cinturones, trabas y luces</td>
                    <td><BsCheckCircleFill/></td>
                    <td><BsCheckCircleFill/></td>
                </tr>
                <tr className='tabla2'>
                    <td>Control de frenos, discos y pastillas de freno</td>
                    <td><BsCheckCircleFill/></td>
                    <td><BsCheckCircleFill/></td>
                </tr>
                <tr className='tabla1'>
                    <td>Revisión de batería</td>
                    <td><BsCheckCircleFill/></td>
                    <td><BsCheckCircleFill/></td>
                </tr>
                <tr className='tabla2'>
                    <td>Cambio de filtro de aire</td>
                    <td><BsCheckCircleFill/></td>
                    <td><BsCheckCircleFill/></td>
                </tr>
                <tr className='tabla1'>
                    <td>Rotación y balanceo</td>
                    <td></td>
                    <td><BsCheckCircleFill/></td>
                </tr>
                <tr className='tabla2'>
                    <td>Filtro habitáculo</td>
                    <td></td>
                    <td><BsCheckCircleFill/></td>
                </tr>
                <tr className='tabla1'>
                    <td>Diagnóstico electrónico con scanner</td>
                    <td></td>
                    <td><BsCheckCircleFill/></td>
                </tr>
                
            </table>
        </div>
    </div>
  )
}

export default TablaService