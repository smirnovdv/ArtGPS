import React from 'react';
import './css/Logo.css';
import logo from './images/logo.png';
const Link = require("react-router-dom").Link;

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
