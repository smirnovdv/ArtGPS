import React, { Component } from 'react';
import './css/ChallengePic.css'

export default class ChallengePic extends Component {
    constructor(){
        super();
        this.state = {
            artworks:[{},{},{}],
            score:0,
            time:0,
            seconds:60,
            rightAnswer:{image_url:"*"},
            resultVisibility:"none"
        }
    }
    fetchPic() {
        fetch(`/get_challenge`)
        .then(
            (response)=> {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                response.status);
                return;
            }
            // Examine the text in the response
            response.text().then((artwork)=> {
                let d = new Date();
                let rightAnswer = JSON.parse(artwork).splice(Math.floor(Math.random()*3),1)
                this.setState({artworks:JSON.parse(artwork),
                               rightAnswer:rightAnswer[0],
                               time:d.getTime()}
                )
            });
            }
        )
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
    }
    //function managing time
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

    
    componentDidMount() {
        //fetching "proxy": "http://localhost:3001",
        this.fetchPic();
        this.interval = setInterval(() => this.tick(), 1000);
    }
    
    
    // clicks on answers
    handleClick = (e) => {
        let target = e.target;
        let d = new Date();
        if (target.innerText === this.state.rightAnswer.title.trim()) {
            this.fetchPic()
            target.classList="clickedRight";
            setTimeout(()=>{
                if (this.state.seconds>0){
                this.setState((prevState, props) => ({
                    score: prevState.score  + Math.min(Math.round(100000/(d.getTime() - prevState.time)),100)
                }));
                    target.classList="answer";
                    
                }
            },1000)
        }
        else {
            if (this.state.seconds>0 && target.classList!="clickedWrong"){
            this.setState((prevState, props) => ({
                score: prevState.score - Math.min(Math.round(50000/(d.getTime() - prevState.time)),100)
            }));
            target.classList="clickedWrong";
            setTimeout(()=>{
                target.classList="answer"},1000)
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
                    <p className="challengeQuestion">What is the name of this artwork?</p>
                    <div className="answer" onClick={this.handleClick}>{this.state.artworks[0].title}</div>
                    <div className="answer" onClick={this.handleClick}>{this.state.artworks[1].title}</div>
                    <div className="answer" onClick={this.handleClick}>{this.state.artworks[2].title}</div>
                    <p className="scoreAndTime">Score:<span className="score"> {this.state.score}</span> Time: <span className="seconds">0:{this.state.seconds>9?this.state.seconds:"0"+this.state.seconds}</span></p>
                    <div className="result" style={{display:this.state.resultVisibility}}>
                        <p>Your score is <span className="score"> {this.state.score} </span></p>
                        <div onClick={this.startAgain}>NEW GAME</div>
                    </div>
                </div>
                <div className="challengePic" style={{backgroundImage:'url("'+this.state.rightAnswer.image_url.replace('{image_version}','large')+'")'}}></div>
            </div>
        )
    }
}


