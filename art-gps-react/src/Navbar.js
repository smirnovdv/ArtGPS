import React from 'react';
import './css/Navbar.css';
import Logo from './Logo';
import NavItem from './NavItem';
const Link = require("react-router-dom").Link;

function Navbar() {
    return (
        <div className="navbar">
            <Logo/>
            <NavItem name="challenge"/>
            <NavItem name="inspiration"/>
            <NavItem name="gallery"/>
        </div>
    )
  }

export default Navbar;
