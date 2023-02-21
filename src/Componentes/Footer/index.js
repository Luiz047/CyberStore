import React from "react";
import './style.css';

function Footer() {
    return (
        <div class="rodape LimitadorSecao">
        <div class="tamanho-maximo-container rodape-container">
          <div class="rodape-info">
            <h4>Entre em contato conosco:</h4>
          </div>
    
          <a class="rodape-info rodape-link" target="_blank" href="https://goo.gl/maps/1vfaCMvq2YFUboXn9">
            
    
            <p className="footP">
              
              📌 Itapema - Sc
              
            </p>
          </a>
    
          <div class="rodape-info">
            
    
            <p className="footP">
            📦 Entregamos na região   📦   Enviamos para todo Brasil 🇧🇷 </p>
            
          </div>
    
          <a class="rodape-info rodape-link" target="_blank" href="https://api.whatsapp.com/message/OAXTQ5Q72AJZM1?autoload=1&app_absent=0">
            
    
            <p className="footP">
            ☎️ Faça sua pedido pelo Whatsapp 
            </p>
          </a>
    
          <div class="rodape-copyright">
            © Copyright - CyberStore
          </div>
        </div>
      </div>


    )
}

export default Footer;