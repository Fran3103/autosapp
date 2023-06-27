import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='nav'>
        <div className='logo'>   
            <Link to="/"><h1>Logo</h1>
            </Link> 
        </div>
        
        <div className='ContainerLinks' >
            <ul className='links'>
                <li>
                    <Link to="/">Autos</Link>
                </li>

                <li>
                    <Link to="/chevrolet">Chevrolet</Link>    
                </li>

                <li>
                    <Link to="/fiat">Fiat</Link>
                </li>

                <li>
                    <Link to="/ford">Ford</Link>
                </li>

                <li>
                    <Link to="/peugeot">Peugeot</Link>
                </li>

                <li>
                    <Link to="#">Renault</Link>
                </li>

                <li>
                    <Link to="#">Volkswagen</Link>
                </li>

            </ul>
        </div>
    </nav>
  )
}

export default Navbar