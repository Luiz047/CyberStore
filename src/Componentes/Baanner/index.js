import React from "react";
import './style.css';
import Film from '../Baanner/film.mp4'

function Banner() {
    return(
        <section>
            <video src= {Film} autoPlay loop muted/>
            <div className="conteudo">
                <h1>Cyber Store</h1>
                <p>  Elegância & Sofisticação </p>
            </div>
        </section>
    )

}

export default Banner;