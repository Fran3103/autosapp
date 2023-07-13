import React from 'react'
import { Link } from 'react-router-dom'
import foto from '../../img/Otras/ford-focus.png';

const Header = () => {

 
  return (
    <div >
        <div className='contenedorHeader'>
          <div className="textoHeader">
              <h1>La compra y venta de autos usados mas grande del pais</h1>
              <p>Tenemos mas de 1000 autos para ofrecer </p>
              
                  <Link to="/autos" >
                      <button className='btnHeaderCompra'>  Compra tu auto </button> 
                  </Link>
              
            
                  <Link to="/vender"className='btnHeaderVenta' > 
                      ¿ Queres vender tu auto? <span>{'>'}</span> 
                  </Link>
            
          </div>

          <div className="imagenHeader">
              <img src={foto} alt="focus" className='focus'/>
          </div>
      </div>
      
    </div>
  )
}

export default Header