import React from 'react';
import './css/StartButton.css';
import start_button from './images/start_button.png';
const Link = require("react-router-dom").Link;

export default function StartButton(props) {
    return (
        <div className="homeButton flicker-in-1">
            <Link to="quiz">
                <img src={start_button} alt="" srcset=""/>
            </Link>
        </div>
    )
  }
