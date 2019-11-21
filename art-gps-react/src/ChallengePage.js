import React, {Component} from 'react';
import './css/ChallengePage.css';
import Navbar from './Navbar';
import ChallengePic from './ChallengePic';
import StartChallenge from './StartChallenge';


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
                {this.state.renderedPage}
            </div>
        )}
    
}

export default ChallengePage;