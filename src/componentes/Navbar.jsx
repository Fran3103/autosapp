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
                <li  >
                    <Link className='btn-links' to="/">Autos</Link>
                </li>

                <li >
                    <Link className='btn-links' to="/autos/Chevrolet">Chevrolet</Link>    
                </li>

                <li >
                    <Link className='btn-links' to="/autos/Fiat">Fiat</Link>
                </li>

                <li >
                    <Link to="/autos/Ford" className='btn-links'>Ford</Link>
                </li>

                <li >
                    <Link to="/autos/Peugeot" className='btn-links'>Peugeot</Link>
                </li>

                <li >
                    <Link className='btn-links' to="/autos/Renault">Renault</Link>
                </li>

                <li >
                    <Link className='btn-links' to="/autos/Volkswagen">Volkswagen</Link>
                </li>

            </ul>
        </div>
    </nav>
  )
}

export default Navbar