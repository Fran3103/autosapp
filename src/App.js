
import './App.css';
import Cards from './componentes/Cards';

import ContainerCards from './componentes/ContainerCards';
import Detalle from './componentes/Detalle';
import DetalleContainer from './componentes/DetalleContainer';
import Navbar from './componentes/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      
      {/* <BrowserRouter>
        <Navbar/>

        <Routes>

          <Route path='/' element={<ContainerCards/>}  />
          <Route path='/autos/:categoria' element={<ContainerCards/>} />
          

        </Routes>
        
       
      </BrowserRouter> */}
     
      <Navbar/>
      <ContainerCards />
      <DetalleContainer itemid={"chevrolet-onix"} />
      
    </div>
  );
}

export default App;
