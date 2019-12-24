import React from 'react';
import './css/StartButton.css';
import start_button from './images/start_button.png';
const Link = require("react-router-dom").Link;

function StartButton(props) {
    return (
        <div className="homeButton">
            <Link to="exploration">
                <img src={start_button} alt="" srcset=""/>
            </Link>
        </div>
    )
  }

export default StartButton;