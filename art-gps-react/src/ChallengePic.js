import React, { Component } from 'react';
import './css/ChallengePic.css'

export default function ChallengePic(props) {
    const image = props.artworks[0].image_url.replace("{image_version}","large");
    let randomArray = [0,1,2];
    // clicks on answers
    const handleClick = (e) => {
        if (e.target.innerText === props.artworks[0].title.trim()) {
            e.target.classList="clickedRight";
            setTimeout(()=>{setState})
        }
        else {
            e.target.classList="clickedWrong";
        }
    }
    // const answer = <button className="answer">{props.artworks[randomArray.splice(Math.floor(Math.random()*3),1)].title}</button>
    return (
        <div className="Challenge">
            <div className="challengePic" style={{backgroundImage:'url("'+image+'")'}}></div>
            <div className="buttons"> 
                <p className="challengeQuestion">What is the name of this artwork?</p>
                {/* randomized buttons */}
                <button className="answer" onClick={handleClick}>{props.artworks[randomArray.splice(Math.floor(Math.random()*3),1)].title}</button>
                <button className="answer" onClick={handleClick}>{props.artworks[randomArray.splice(Math.floor(Math.random()*2),1)].title}</button>
                <button className="answer" onClick={handleClick}>{props.artworks[randomArray.splice(Math.floor(Math.random()*1),1)].title}</button>
            </div>
        </div>
        
    )
}


