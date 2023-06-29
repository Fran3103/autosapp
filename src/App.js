
import './App.css';

import Slider from './componentes/Carpeta-Carretes/Slider';


import ContainerCards from './componentes/Cards/ContainerCards';

import DetalleContainer from './componentes/Pagina detalles/DetalleContainer';
import Navbar from './componentes/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      
      
     <BrowserRouter>
     

      <Navbar/>
      
      <Routes>
        <Route path='/autos' element={<ContainerCards />} />
        <Route path='/autos/:categoria' element={<ContainerCards/>} />
        <Route path='/auto/:id' element={<DetalleContainer />} />
        <Route path='/' element={<Slider />} />
      </Routes>
       
      
      </BrowserRouter>
    </div>
  );
}

export default App;
