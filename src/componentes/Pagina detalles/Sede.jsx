import React from 'react'
import { Link } from 'react-router-dom'

const Sede = ({sede}) => {
  return (
    <div className='contenedorSedes'>
        
        <img src={sede.imagen} alt={sede.Titulo} className='imagenSede' />
        
        <div className="botonContenedorSedes">
            <div className="titulosSedes">
                <h3>{sede.Titulo}</h3>
                <p>{sede.Descripcion}</p>
            </div>
            <div className="textoSedes">
                <div className="textoSedesInventario">
                    <p>
                        {sede.inventario}
                    </p>
                    <p>{sede.autos}</p>
                </div>
                <div className="btnSedes">
                    <Link>
                        <button>
                            Ver detalles
                        </button>
                    </Link>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default Sede