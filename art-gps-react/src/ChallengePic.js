import React, { Component } from 'react';
import './css/ChallengePic.css'

export default class ChallengePic extends Component {
    constructor(){
        super();
        this.state = {
            artworks:[{image_url:""},{image_url:""},{image_url:""}],
            score:0,
            time:0
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
                console.log("Server response is" + JSON.parse(artwork));
                this.setState({artworks:JSON.parse(artwork),
                               time:d.getTime()}
                )
            });
            }
        )
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
    }
    componentDidMount() {
        //fetching "proxy": "http://localhost:3001",
        this.fetchPic()
    }
    
    
    // clicks on answers
    handleClick = (e) => {
        let target = e.target;
        if (target.innerText === this.state.artworks[0].title.trim()) {
            target.classList="clickedRight";
            let d = new Date();
            
            setTimeout(()=>{
                this.setState((prevState, props) => ({
                    score: prevState.score  +Math.round(10000000/(d.getTime() - prevState.time))
                }));
                target.classList="answer";
                this.fetchPic()},2000)
        }
        else {
            target.classList="clickedWrong";
            setTimeout(()=>{
                target.classList="answer"},1000)
        }
    }
    // const answer = <button className="answer">{props.artworks[randomArray.splice(Math.floor(Math.random()*3),1)].title}</button>
    render(){
        let image = this.state.artworks[0].image_url.replace("{image_version}","large");
        let randomArray = [0,1,2];
        return (
            <div className="Challenge">
                <div className="challengePic" style={{backgroundImage:'url("'+image+'")'}}></div>
                <div className="buttons"> 
                    <p className="challengeQuestion">What is the name of this artwork?</p>
                    <p className="challengeQuestion">Your score: {this.state.score}</p>
                    {/* randomized buttons */}
                    <button className="answer" onClick={this.handleClick}>{this.state.artworks[randomArray.splice(Math.floor(Math.random()*3),1)].title}</button>
                    <button className="answer" onClick={this.handleClick}>{this.state.artworks[randomArray.splice(Math.floor(Math.random()*2),1)].title}</button>
                    <button className="answer" onClick={this.handleClick}>{this.state.artworks[randomArray.splice(Math.floor(Math.random()*1),1)].title}</button>
                </div>
            </div>
        )
    }
}


