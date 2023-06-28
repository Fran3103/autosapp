import React from 'react';
import { a } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='nav'>
        <div className='logo'>   
            <a href="/"><h1>Logo</h1>
            </a> 
        </div>
        
        <div className='ContainerLinks' >
            <ul className='links'>
                <li>
                    <a href="/">Autos</a>
                </li>

                <li>
                    <a href="/autos/Chevrolet">Chevrolet</a>    
                </li>

                <li>
                    <a href="/autos/Fiat">Fiat</a>
                </li>

                <li>
                    <a href="/autos/Ford">Ford</a>
                </li>

                <li>
                    <a href="/autos/Peugeot">Peugeot</a>
                </li>

                <li>
                    <a href="/autos/Renault">Renault</a>
                </li>

                <li>
                    <a href="/autos/Volkswagen">Volkswagen</a>
                </li>

            </ul>
        </div>
    </nav>
  )
}

export default Navbar