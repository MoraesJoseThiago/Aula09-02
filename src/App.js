import './App.css';
import Navbar from './components/navbar';
import Fotos from './components/Curiosidade';
import Home from  './components/Home';
import Videos from  './components/MelhoresFilmes';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path = "/" element={ <Home/> } />
      <Route path = "/Fotos" element = { <Fotos/> } />
      <Route path = "/Videos" element = { <Videos/> } />
      </Routes>
    </>
    
  );
}

export default App;
                                          