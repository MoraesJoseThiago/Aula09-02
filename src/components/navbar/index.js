import React from "react";
import './navbar.css'
import transferir from '../Imagens/transferir.png';
import styled from "styled-components";
function Navbar (){
    return(
        <>
             <nav class="navbar navbar-expand-lg navbar-light Navbar-Salvador a">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
             <Transferir src = {transferir}/>

              </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a aria-current="page" href="#">Fotos</a>
              </li>

              <li class="nav-item">
                <a  href="#">Videos</a>
              </li>
              <li class="nav-item">
                <a href="#">Viagem</a>
              </li>
              <li class="nav-item dropdown">
                <ul class="dropdown-menu" aria-labelledby="n    avbarDropdownMenuLink">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>-
            </ul>
          </div>
        </div>
      </nav>
        </>
    )
}

export default Navbar;

const Transferir = styled.img`
    width: 50px;
    height: 50px;
`;