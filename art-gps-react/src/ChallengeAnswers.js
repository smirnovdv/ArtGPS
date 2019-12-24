import React, { Component } from 'react';
import './css/ChallengePic.css'

export default class ChallengePic extends Component {
    
    
    
    // clicks on answers
    handleClick = (e) => {
        let target = e.target;
        if (target.innerText === this.state.rightAnswer.title.trim()) {
            target.classList="clickedRight";
            let d = new Date();
            
            setTimeout(()=>{
                if (this.state.seconds>0){
                this.setState((prevState, props) => ({
                    score: prevState.score  + Math.round(10000/(d.getTime() - prevState.time))
                }));
                
                    target.classList="answer";
                    this.fetchPic()
                }
            },1000)
        }
        else {
            target.classList="clickedWrong";
            setTimeout(()=>{
                target.classList="answer"},1000)
        }
    }
    render(){
        return (
            <div className="Challenge">
                <div className="challengePic" style={{backgroundImage:'url("'+this.state.rightAnswer.image_url.replace('{image_version}','large')+'")'}}></div>
                <div className="buttons"> 
                    <p className="challengeQuestion">What is the name of this artwork?</p>
                    <button className="answer" onClick={this.handleClick}>{this.state.artworks[0].title}</button>
                    <button className="answer" onClick={this.handleClick}>{this.state.artworks[1].title}</button>
                    <button className="answer" onClick={this.handleClick}>{this.state.artworks[2].title}</button>
                    <p className="challengeQuestion">Your score: {this.state.score} Time left: {this.state.seconds}</p>
                </div>
            </div>
        )
    }
}


