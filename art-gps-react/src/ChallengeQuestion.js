import React, { Component } from 'react';
import './css/ChallengePic.css'

export default function ChallengePic(props){
    
    // const answer = <button className="answer">{props.artworks[randomArray.splice(Math.floor(Math.random()*3),1)].title}</button>
    return (
        <div className="Challenge">
            <div className="challengePic" style={{backgroundImage:'url("'+props.rightAnswer.image_url.replace('{image_version}','large')+'")'}}></div>
        </div>
    )
}
