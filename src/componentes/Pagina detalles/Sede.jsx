import React from 'react'
import { Link } from 'react-router-dom'

const Sede = ({sede}) => {
  return (
    <div className='contenedorSedes'>
        <h2>{sede.Titulo}</h2>
        <img src={sede.imagen} alt={sede.Titulo} className='imagenSede' />
        <p>{sede.Descripcion}</p>
        <div className="botonContenedorSedes">
            <div className="textoSedes">
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
  )
}

export default Sede