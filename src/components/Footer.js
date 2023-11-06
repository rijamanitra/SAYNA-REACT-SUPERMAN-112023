import React from 'react'
import '../styles/Footer.scss';
import logo_0 from '../assets/logos/logo_0.png';
import logo_1 from '../assets/logos/logo_1.png';
import logo_2 from '../assets/logos/logo_2.png';
import logo_3 from '../assets/logos/logo_3.png';
import facebook from '../assets/icones/facebook.png';
import instagram from '../assets/icones/instagram.png';
import twitter from '../assets/icones/twitter.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-black mt-5 py-5">
    <div className="container">
      <div className="text-footer">
        <img src={logo_0} alt="" />
        Ce projet respecte l’univers cinématographique des films Superman
      </div>
      <div className="social-footer">
        <Link href="" className="social-item hoveryellow ">
          <img width="4%" src={logo_1} alt="" />
          <img src={logo_2} alt="" />
          <img width="4%" src={logo_3} alt="" />
        </Link>
        <Link href="" className="social-item"
          ><img
            className="hoveryellow"
            src={facebook}
            alt=""
        /></Link>
        <Link href="" className="social-item"
          ><img className="hoveryellow" src={instagram} alt=""
        /></Link>
        <Link href="" className="social-item"
          ><img className="hoveryellow" src={twitter} alt=""
        /></Link>
      </div>
    </div>
  </footer>
  )
}

export default Footer