import React from 'react';

const Navbar = () => {
  return (
    <nav className='nav'>
        <div className='logo'>   
            <h1>Logo</h1>
        </div>
        
        <div className='ContainerLinks' >
            <ul className='links'>
                <li>
                    <a href="#">Autos</a>
                </li>

                <li>
                    <a href="#">Chevrolet</a>    
                </li>

                <li>
                    <a href="#">Fiat</a>
                </li>

                <li>
                    <a href="#">Ford</a>
                </li>

                <li>
                    <a href="#">Peugeot</a>
                </li>

                <li>
                    <a href="#">Renault</a>
                </li>

                <li>
                    <a href="#">Volkswagen</a>
                </li>

            </ul>
        </div>
    </nav>
  )
}

export default Navbar