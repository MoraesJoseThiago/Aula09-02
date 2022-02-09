import './App.css';
import Navbar from './components/navbar';
import Fotos from './components/Fotos';
import Home from  './components/Home';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
    </>
  );
}

export default App;
