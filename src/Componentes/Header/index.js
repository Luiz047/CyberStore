import React from "react";
import './style.css';

function Topo() {
    return(
    <header>
        <div className="LimitadorSecao">
          <img src="./assets/logo yber.jpg"/>
          <nav>
            <a href="#Sobre">Sobre</a>
            <a href="#Servico">Mais vendidos </a>
            <a href="#FaleConosco">Fale Conosco</a>
          </nav>
        </div>
    </header>
    )
}

export default Topo;