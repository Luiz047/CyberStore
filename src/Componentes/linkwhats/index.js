import React from "react";
import './style.css';

function Linkwhats () {
    return(
           < section id="FaleConosco"className="background">
           <div className="linkContent LimitadorSecao">
                <h3>Acesse nosso Catalogo</h3>
                <div className="linkContent2">
                    <div className="horizontal">
                     <p>Click no botão abaixo para conferir nosso catalogo</p>
                     <p>e acessar nosso <span>Whatsapp</span> </p>
                    
                    <button ><a href="https://api.whatsapp.com/message/OAXTQ5Q72AJZM1?autoload=1&app_absent=0" target="_blank"> Iniciar um Atendimento  </a></button>
                    </div>
                <div className="whats">
                   <a href="https://api.whatsapp.com/message/OAXTQ5Q72AJZM1?autoload=1&app_absent=0" target="_blank" ><img src="./assets/logotrp.png"/></a>

                </div>
                </div>
           </div>
           </section>
 )
}

export default Linkwhats;