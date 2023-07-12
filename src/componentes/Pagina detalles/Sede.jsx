import React from 'react'
import { Link } from 'react-router-dom'

const Sede = ({sede}) => {
  return (
    <div className='contenedor'>
        <h2>{sede.Titulo}</h2>
        <p>{sede.Descripcion}</p>
        <div className="boton">
            <div className="texto">
                <p>
                    {sede.inventario}
                </p>
                <p>{sede.autos}</p>
            </div>
            <div className="btn">
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