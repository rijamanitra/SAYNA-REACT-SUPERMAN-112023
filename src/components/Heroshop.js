import React from 'react'
import '../styles/Heroshop.scss';
import flèche_down_header from '../assets/logos/flèche_down_header.png';

function Heroshop() {
  return (
    <section id="hero">
    <div class="hero-hero">
        <div class="container">
            <h1 class="hero-tittle text-uppercase">
            ENVIE D’UN SLIP JAUNE ?
            </h1>
        </div>
       
    </div>
    <img
     className="fleche"
            src={flèche_down_header}
            alt=""
          />
     
</section>
  

 

  )
}

export default Heroshop