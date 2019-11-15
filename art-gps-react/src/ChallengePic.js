import React, { Component } from 'react';
import './css/ChallengePic.css'

export default function ChallengePic(props) {
    const image = props.artworks[0].image_url.replace("{image_version}","large");
    let randomArray = [0,1,2];
    console.log(image)
    // const answer = <button className="answer">{props.artworks[randomArray.splice(Math.floor(Math.random()*3),1)].title}</button>
    return (
        <div className="Challenge">
            <div className="challengePic" style={{backgroundImage:'url("'+image+'")'}}></div>
            
            <div className="buttons">
                <button className="answer">{props.artworks[randomArray.splice(Math.floor(Math.random()*3),1)].title}</button>
                <button className="answer">{props.artworks[randomArray.splice(Math.floor(Math.random()*2),1)].title}</button>
                <button className="answer">{props.artworks[randomArray.splice(Math.floor(Math.random()*1),1)].title}</button>
            </div>
        </div>
        
    )
}


