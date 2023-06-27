
import './App.css';

import ContainerCards from './componentes/ContainerCards';
import Navbar from './componentes/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar/>

        <Routes>

          <Route path='/' element={<ContainerCards/>}  />
        
        </Routes>
        
        
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;
