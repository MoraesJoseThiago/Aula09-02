import './App.css';
import Navbar from './components/navbar';
import Curiosidades from './components/Curiosidade';
import Home from  './components/Home';
import MelhoresFilmes from  './components/MelhoresFilmes';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path = "/Inicio" element={ <Home/> } />
      <Route path = "/Curiosidades" element = { <Curiosidades/> } />
      <Route path = "/Melhores-Filmes" element = { <MelhoresFilmes/> } />
      </Routes>
    </>
    
  );
}

export default App;
                                          