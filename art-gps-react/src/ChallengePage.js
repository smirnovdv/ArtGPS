import React, {Component} from 'react';
import './css/ChallengePage.css';
import Navbar from './Navbar';
import ChallengeScore from './ChallengeScore';
import ChallengePic from './ChallengePic';
import ChallengeQnA from './ChallengeQnA';
import ChallengeRightAnswer from './ChallengeRightAnswer';



class ChallengePage extends Component{
    constructor(){
        super();
        this.state = {
            artworks:[{image_url:""},{image_url:""},{image_url:""}],
            score:0
        }
    }
    
    componentDidMount() {
        //fetching "proxy": "http://localhost:3001",
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
                console.log("Server response is" + JSON.parse(artwork));
                this.setState({artworks:JSON.parse(artwork)})
            });
            }
        )
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
    }
    
    render(){
        return (
            <div className="challengePage">
                <Navbar activePage="challenge"/>
                {/* <ChallengeScore/> */}
                <ChallengePic artworks = {this.state.artworks}/>
                {/* <ChallengeQnA/>
                <ChallengeRightAnswer/> */}
            </div>
        )}
    
}

export default ChallengePage;