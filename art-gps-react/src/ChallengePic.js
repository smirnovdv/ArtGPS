import React, { Component } from 'react';
import './css/ChallengePic.css'

export default function ChallengePic(props) {
    return (
        <div>
            <img src={props.pic} alt="Do you know this masterpiece?"/>
            <h3 className="question"></h3>
            <button className="answer"></button>
            <button className="answer"></button>
            <button className="answer"></button>
        </div>
        
    )
}


