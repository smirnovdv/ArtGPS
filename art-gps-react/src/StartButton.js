import React from 'react';
import './css/StartButton.css';
import start_button from './images/start_button.png';
const Link = require("react-router-dom").Link;

function StartButton(props) {
    return (
        <Link to="gallery">
            <button className="homeButton">
                <img src={start_button} alt="" srcset=""/>
            </button>
        </Link>
    )
  }

export default StartButton;