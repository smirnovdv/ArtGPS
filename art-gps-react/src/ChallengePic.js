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
            //plug for .replace method
            rightAnswer:{image_url:"*"}
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
                console.log(rightAnswer)
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

    tick() {
        if (this.state.seconds>0) {
            this.setState(prevState => ({
                seconds: prevState.seconds - 1
        }))
        }
        else {
            this.setState({seconds:"Finish"})
            clearInterval(this.interval);
        }
    }


    componentWillUnmount() {
        clearInterval(this.interval);
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
            target.classList="clickedRight";
            
            
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
            this.setState((prevState, props) => ({
                score: prevState.score  - Math.round(5000/(d.getTime() - prevState.time))
            }));
            target.classList="clickedWrong";
            setTimeout(()=>{
                target.classList="answer"},1000)
        }
    }
    // const answer = <button className="answer">{props.artworks[randomArray.splice(Math.floor(Math.random()*3),1)].title}</button>
    render(){
        return (
            <div className="Challenge">
              
                <div className="buttons"> 
                    <p className="challengeQuestion">What is the name of this artwork?</p>
                   
                    {/* randomized buttons */}
                    <div className="answer" onClick={this.handleClick}>{this.state.artworks[0].title}</div>
                    <div className="answer" onClick={this.handleClick}>{this.state.artworks[1].title}</div>
                    <div className="answer" onClick={this.handleClick}>{this.state.artworks[2].title}</div>
                    <p className="scoreAndTime">Your score:<span className="score"> {this.state.score}</span> Time left: <span className="seconds">{this.state.seconds}</span></p>
                </div>
                <div className="challengePic" style={{backgroundImage:'url("'+this.state.rightAnswer.image_url.replace('{image_version}','large')+'")'}}></div>
            </div>
        )
    }
}


