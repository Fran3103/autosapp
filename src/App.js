
import './App.css';
import React from 'react'



import ContainerCards from './componentes/Cards/ContainerCards';

import DetalleContainer from './componentes/Pagina detalles/DetalleContainer';
import Navbar from './componentes/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBarPrincipal from './componentes/Navbar/NavBarPrincipal';
import Vender from './componentes/Pagina detalles/Vender';
import Sucursales from './componentes/Pagina detalles/Sucursales';
import Nosotros from './componentes/Pagina detalles/Nosotros';
import Footer from './componentes/Pagina detalles/Footer';
import Principal from './componentes/Pagina detalles/Principal';
import Service from './componentes/Pagina detalles/Service';
import PreguntasFrecuentesPrincipal from './componentes/Pagina detalles/Paginas footer/PreguntasFrecuentesPrincipal';



function App() {
  return (
    <div className="App">
      
      
     <BrowserRouter >
     
      <NavBarPrincipal/>
     
      
        <Routes > 
        
          <Route path='/' element={<Principal/>}/>
          <Route path='/autos'  element={[ <Navbar/>,<ContainerCards />]} />
          <Route path='/autos/:categoria'  element={[<Navbar/>,<ContainerCards/>]} />
          <Route path='/auto/:id'   element={[<Navbar/>,<DetalleContainer />]} />
          <Route path='/vender'  element={<Vender/>}/>
          <Route path='/sucursales'  element={<Sucursales/>}/>
          <Route path='/nosotros'  element={<Nosotros/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/PreguntasFrecuentesPrincipal' element={<PreguntasFrecuentesPrincipal/>}/>
          
        </Routes>
       
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
