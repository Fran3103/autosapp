
import './App.css';

import Slider from './componentes/Carpeta-Carretes/Slider';


import ContainerCards from './componentes/Cards/ContainerCards';

import DetalleContainer from './componentes/Pagina detalles/DetalleContainer';
import Navbar from './componentes/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBarPrincipal from './componentes/Navbar/NavBarPrincipal';
import Vender from './componentes/Pagina detalles/Vender';
import Sucursales from './componentes/Pagina detalles/Sucursales';
import Nosotros from './componentes/Pagina detalles/Nosotros';
import Contacto from './componentes/Pagina detalles/Contacto';
import Header from './componentes/Pagina detalles/Header';
import VentadeAuto from './componentes/Pagina detalles/VentadeAuto';
import ContactoPrincipal from './componentes/Pagina detalles/ContactoPrincipal';
import SedesContenedor from './componentes/Pagina detalles/SedesContenedor';
import Footer from './componentes/Pagina detalles/Footer';



function App() {
  return (
    <div className="App">
      
      
     <BrowserRouter>
     
      <NavBarPrincipal/>
     
      
      <Routes> 
        <Route path='/' element={[ <Header/>, <Slider />,<VentadeAuto/>, <ContactoPrincipal/>,<SedesContenedor/>]} />
        

        <Route path='/autos' element={[ <Navbar/>,<ContainerCards />]} />
        <Route path='/autos/:categoria' element={[<Navbar/>,<ContainerCards/>]} />
        <Route path='/auto/:id' element={[<Navbar/>,<DetalleContainer />]} />
       
        <Route path='/vender' element={[<Vender/>]}/>
        <Route path='/sucursales' element={[<Sucursales/>]}/>
        <Route path='/nosotros' element={[<Nosotros/>]}/>
        <Route path='/contacto' element={[<Contacto/>]}/>
        
      </Routes>
       
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
