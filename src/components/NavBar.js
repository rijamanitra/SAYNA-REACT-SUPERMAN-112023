import React from 'react'
import '../styles/NavBar.scss';
import logo_blanc from '../assets/logos/logo_blanc.png';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg ">
    <div className="container">
      <NavLink to="/" className="navbar-brand">
        <img src={logo_blanc} alt=""/>
      </NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavLink to="home" className="nav-link" aria-current="page"  >HOME</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="eshop" className="nav-link"  >E-SHOP</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="compte" className="nav-link" >MON COMPTE</NavLink>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default NavBar