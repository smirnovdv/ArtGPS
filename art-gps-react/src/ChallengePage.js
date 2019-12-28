import React, {Component} from 'react';
import './css/ChallengePage.css';
import Navbar from './Navbar';
import ChallengePic from './ChallengePic';
import StartChallenge from './StartChallenge';

export default class ChallengePage extends Component{
    constructor() {
        super();
        this.state = {
            renderedPage : "start",
            artworks:[{},{},{}],
            rightAnswer:{id:"*",
            time:0}
        }
    }
    //data fetch placed here to pre-fetch first challenge while user is reading the rules, making UI smoother
    fetchPic = () => {
        fetch(`https://art-gps-server.herokuapp.com/get_challenge`)
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
                    //randomizing answer choices
                    let rightAnswer = JSON.parse(artwork).splice(Math.floor(Math.random()*3),1)
                    this.setState(()=>({artworks:JSON.parse(artwork),
                                rightAnswer:rightAnswer[0],
                                time:d.getTime(),})

                    )
                });
            }
        )
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
    }
    start = () => {
        this.setState(
            {renderedPage: "challenge" }
        )
    }
    componentDidMount() {
        this.fetchPic();
    }
    
    render() {

        return (
            <div className="challengePage">
                {this.state.renderedPage === "start"?
                <div> <Navbar activePage="challenge"/> <StartChallenge startFunction = {this.start}/> </div>:
                <ChallengePic artworks={this.state.artworks} rightAnswer={this.state.rightAnswer}  fetchPic={this.fetchPic} time={this.state.time}/>}
            </div>
        )
    }
}
