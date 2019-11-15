import React from 'react';
import './css/StartButton.css';
import start_button from './images/start_button.png';

function StartButton(props) {
    return (
        <button className="homeButton">
            <img src={start_button} alt="" srcset=""/>
        </button>
    )
  }

export default StartButton;