import React from 'react';
import './css/Logo.css';
import logo from './images/logo.png';
const Link = require("react-router-dom").Link;

//TODO: replace img with divs arrow
function Logo() {
    return (
        <div className="logo">
            <Link to="/">
                <img src={logo} alt="" srcset=""/>
            </Link>
        </div>
    )
  }

export default Logo;
