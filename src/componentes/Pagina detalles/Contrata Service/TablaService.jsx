import React from 'react'
import { BsCheckCircleFill } from "react-icons/bs";


const TablaService = () => {
  return (
    <div className='ContenedorTabla'>
        <h2>El mantenimiento que necesitás en hasta 12 cuotas sin interés</h2>
       
            
 
        <div className="tabla">
            <table className='NavTabla'>
                <tr >
                    <th className="Servicio service">
                       
                            <h2>Servicio</h2>
                            <p>*El precio final dependerá de la marca y modelo de       tu    auto.</p>
                        
                    </th>
                    <th className="Servicio plata">
                        
                            <h2>Plata</h2>
                            <p>desde</p>
                            <p> <span> $</span> 2.404*/mes </p>
                            <p>en 12 cuotas sin interés</p>
                            <button>Elegir servicio</button>
                        
                    </th>
                    <th className="Servicio oro">
                        

                            <h2>Oro</h2>
                            <p>desde</p>
                            <p> <span> $</span> 3.582*/mes </p>
                            <p>en 12 cuotas sin interés</p>
                            <button>Elegir servicio</button>
                        
                    </th>
                </tr> 
                
        </table>   
        
        <table className='TablaCuerpo'>
                
                <tr>
                    <th>Cambio de aceite y filtro</th>
                    <th><BsCheckCircleFill/></th>
                    <th><BsCheckCircleFill/></th>
                </tr>
                <tr>
                    <th>Revisión y relleno de niveles</th>
                    <th><BsCheckCircleFill/></th>
                    <th><BsCheckCircleFill/></th>
                </tr>
                <tr>
                    <th>Revisión de fugas en frenos y refrigeración</th>
                    <th><BsCheckCircleFill/></th>
                    <th><BsCheckCircleFill/></th>
                </tr>
                <tr>
                    <th>Verificación de embrague y suspensión</th>
                    <th><BsCheckCircleFill/></th>
                    <th><BsCheckCircleFill/></th>
                </tr>
                <tr>
                    <th>Chequeo de cinturones, trabas y luces</th>
                    <th><BsCheckCircleFill/></th>
                    <th><BsCheckCircleFill/></th>
                </tr>
                <tr>
                    <th>Control de frenos, discos y pastillas de freno</th>
                    <th><BsCheckCircleFill/></th>
                    <th><BsCheckCircleFill/></th>
                </tr>
                <tr>
                    <th>Revisión de batería</th>
                    <th><BsCheckCircleFill/></th>
                    <th><BsCheckCircleFill/></th>
                </tr>
                <tr>
                    <th>Cambio de filtro de aire</th>
                    <th><BsCheckCircleFill/></th>
                    <th><BsCheckCircleFill/></th>
                </tr>
                <tr>
                    <th>Rotación y balanceo</th>
                    <th></th>
                    <th><BsCheckCircleFill/></th>
                </tr>
                <tr>
                    <th>Filtro habitáculo</th>
                    <th></th>
                    <th><BsCheckCircleFill/></th>
                </tr>
                <tr>
                    <th>Diagnóstico electrónico con scanner</th>
                    <th></th>
                    <th><BsCheckCircleFill/></th>
                </tr>
                
            </table>
        </div>
    </div>
  )
}

export default TablaService