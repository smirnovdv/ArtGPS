import React, {Component} from 'react';
import './css/ChallengePage.css';
import Navbar from './Navbar';
import ChallengePic from './ChallengePic';
import StartChallenge from './StartChallenge';


class ChallengePage extends Component{
    constructor() {
        super();
        this.state = {
            renderedPage : <div> <Navbar activePage="challenge"/> <StartChallenge startFunction = {this.start}/> </div>
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
                {this.state.renderedPage}
            </div>
        )}
    
}

export default ChallengePage;