import React from "react";
import './style.css';

function Sobre() {
    return(
       <article id="Sobre">
        <div className="LimitadorSecao sobree">
        <div className="divisaolateral">
             <h3 className="top">Produtos de Prata e Banhado a ouro 18k  </h3>
         <div className="imgvertical">
         <figure>
            <img src="./assets/colar.jpg"/>
         </figure>

         <figure>
            <img src="./assets/pulseira.jpg"/>
         </figure>

         <figure>
            <img src="./assets/Corrente18K.jpg"/>
         </figure>
         <figure>
            <img src="./assets/corrente-prata.jpg"/>
         </figure>

         <figure>
            <img src="./assets/anelcyber.jpg"/>
         </figure>


         </div>

         <div className="divisaolateral">
        
             
         </div>
         <ul>
            <li>Correntes</li>
            <li>Pulseira</li>
            <li>Pingentes</li>
            <li>Aneis</li>
         </ul>
         <h3 className="bottom">🏆 Produtos Premium 🏆</h3>
       </div>
      </div>
       </article>
    )
}

export default Sobre;