
import './App.css';
import ContenedorCarretes from './componentes/Carpeta-Carretes/ContenedorCarretes';


import ContainerCards from './componentes/ContainerCards';

import DetalleContainer from './componentes/DetalleContainer';
import Navbar from './componentes/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      
      
     <BrowserRouter>
     

      <Navbar/>
      <ContenedorCarretes />
      
      <Routes>
        <Route path='/' element={<ContainerCards />} />
        <Route path='/autos/:categoria' element={<ContainerCards/>} />
        <Route path='/auto/:id' element={<DetalleContainer />} />

      </Routes>
       
      
      </BrowserRouter>
    </div>
  );
}

export default App;
