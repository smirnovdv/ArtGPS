import React, { Component } from 'react';
import './css/ChallengePic.css'


//key Challenge component
export default class ChallengePic extends Component {
    constructor(props){
        super(props);
        this.state = {
            score:0,
            time:0,
            seconds:60,
            resultVisibility:"none",
            animation:"slide-in-right"
        }
    }
    
    //method managing timer and showing results in the end of it
    tick() {
        if (this.state.seconds>0) {
            this.setState(prevState => ({
                seconds: prevState.seconds - 1
            }));
        }
        else {
            this.setState({resultVisibility:"flex"});
            clearInterval(this.interval);
        }
    }

    //fetching first question
    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }
    
    
    // clicks on answers choices
    handleClick = (e) => {
        let target = e.target;
        let d = new Date();
        if (this.state.seconds > 0){
            //right answer
            if (target.innerText === this.props.rightAnswer.title.trim()) {
                target.classList="clickedRight";
                setTimeout(()=>{
                    this.setState((prevState, props) => ({
                        //adding score points based on speed of clicks
                        score: prevState.score  + Math.min(Math.round(100000/(d.getTime() - this.props.time)),100),
                        animation:"slide-out-left"
                        
                    }));
                },50)
                setTimeout(()=>{
                    this.props.fetchPic()
                    target.classList="answer";
                    this.setState({animation:"slide-in-right"})
                },450)
            }
            //wrong answer
            else {
                if (this.state.seconds>0 && target.classList!=="clickedWrong"){
                this.setState((prevState, props) => ({
                    score: prevState.score - Math.min(Math.round(100000/(d.getTime() - this.props.time)),100)
                }));
                target.classList="clickedWrong";
                setTimeout(()=>{
                    target.classList="answer"},500)
                }
            }
        }
    }

    //New game button 
    startAgain() {
        window.location.reload(false);
    };

    //Clearing interval
    componentWillUnmount() {
        clearInterval(this.interval);
      }

    render(){
        return (
            <div className="Challenge">
                <div className="buttons"> 
                    <p className="challengeQuestion">Name of this artwork?</p>
                    <div className={"answer " + this.state.animation}  onClick={this.handleClick}>{this.props.artworks[0].title}</div>
                    <div className={"answer " + this.state.animation}  onClick={this.handleClick}>{this.props.artworks[1].title}</div>
                    <div className={"answer " + this.state.animation}  onClick={this.handleClick}>{this.props.artworks[2].title}</div>
                    <p className="scoreAndTime">Score:<span className="score"> {this.state.score}</span> Time: <span className="seconds">0:{this.state.seconds>9?this.state.seconds:"0"+this.state.seconds}</span></p>
                    <div className="result" style={{display:this.state.resultVisibility}}>
                        <p>Your score is <span className="score"> {this.state.score} </span></p>
                        <div onClick={this.startAgain}>NEW GAME</div>
                    </div>
                </div>
                <div className={"challengePic " + this.state.animation} style={{backgroundImage:`url("https://art-gps.s3.amazonaws.com/${this.props.rightAnswer.id}.jpg")`}}></div>
            </div>
        )
    }
}


