import React, {Component} from 'react';
import './css/ChallengePage.css';
import Navbar from './Navbar';
import ChallengePic from './ChallengePic';
import StartChallenge from './StartChallenge';


const Router = require("react-router-dom").BrowserRouter;
const Route = require("react-router-dom").Route;



class ChallengePage extends Component{
    constructor() {
        super();
        this.state = {
            renderedPage : <StartChallenge startFunction = {this.start}/>
        }
    }
    start = ()=>{
        this.setState(
            {renderedPage: <ChallengePic />}
        )
    }
    render(){
        return (
            <div className="challengePage">
                <Navbar activePage="challenge"/>
                {/* <ChallengeScore/> */}
                {this.state.renderedPage}
                {/* <ChallengeQnA/>
                <ChallengeRightAnswer/> */}
            </div>
        )}
    
}

export default ChallengePage;