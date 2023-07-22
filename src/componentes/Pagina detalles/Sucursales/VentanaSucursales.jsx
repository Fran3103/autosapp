import React from 'react'
import { AiOutlineClose} from "react-icons/ai";
const VentanaSucursales = ({sede}) => {
  return (
      <div className='contenedorVS'>
            <div className="capa">
            </div>
            <div className="contenidoVS">
                <div className="subContenido">
                    <AiOutlineClose/>
                    <p className="subtitulo">Showroom y Centro de Inspección</p>
                    <h1>{sede.Titulo}</h1>
                    <p className="direccion">
                    {sede.Descripcion}
                    </p>
                    <img src={sede.imagen} alt="mapa" />
                    <div className="horarios">
                        <div className="habiles">
                            <p>Lunes a Viernes</p>
                            <p>9:00 am - 7:00 pm</p>
                        </div>
                        <div className="habiles">
                            <p>Sabado y Domingo</p>
                            <p>9:00 am - 6:00 pm</p>
                        </div>
                        <div className="inventario">
                            <p>Inventario <span>+400 autos</span></p>
                        </div>
                    </div>
                </div>
            </div>
            

        </div>
  )
}

export default VentanaSucursales