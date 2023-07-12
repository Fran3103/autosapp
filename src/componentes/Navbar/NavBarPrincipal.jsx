import React from 'react'
import { Link } from 'react-router-dom'

const NavBarPrincipal = () => {
  return (
    <div className='contenedor-navbarprincipal'>
        <div  >
          <Link to="/">
            <h3 className="logoPrincipal" >Logo</h3>
          </Link>
        </div>
        <div className="container">
            <ul>
                <Link to="/autos">Comprar</Link>
                <Link to="/vender">Vender</Link>
                <Link to="/sucursales">Sucursales</Link>
                <Link to="/nosotros">Nosotros</Link>
                <Link to="/Contacto">Contacto</Link>
            </ul>
        </div>
    </div>
  )
}

export default NavBarPrincipal