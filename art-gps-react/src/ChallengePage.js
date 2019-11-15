import React, {Component} from 'react';
import './css/ChallengePage.css';
import Navbar from './Navbar';
import ChallengePic from './ChallengePic';




class ChallengePage extends Component{
    
    render(){
        return (
            <div className="challengePage">
                <Navbar activePage="challenge"/>
                {/* <ChallengeScore/> */}
                <ChallengePic />
                {/* <ChallengeQnA/>
                <ChallengeRightAnswer/> */}
            </div>
        )}
    
}

export default ChallengePage;