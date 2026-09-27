import React from "react";
import michi_img from '../../assets/kitty-removebg.png'
import '../../styles/Cats.css'

export const CatHero = () => {
    return(
        <section className="hero-section">
            <div className="hero-image">
                <img src={michi_img} alt="Michi de portada" />
            </div>
            <div className="hero-text">
                <span className="hero-subtitule">MUST LOVE</span>
                <h1 className="hero-title">Cats</h1>
            </div>
        </section>

    )
}