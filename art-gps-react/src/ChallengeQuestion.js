import React, { Component } from 'react';
import './css/ChallengePic.css'

export default function ChallengePic(props){
    
    return (
        <div className="Challenge">
            <div className="challengePic" style={{backgroundImage:'url("'+props.rightAnswer.image_url.replace('{image_version}','large')+'")'}}></div>
        </div>
    )
}
