import React, {Component} from 'react';
import './css/InspirationPage.css';
import Navbar from './Navbar';
import ChallengePic from './ChallengePic';
import StartChallenge from './StartChallenge';



export default class ChallengePage extends Component{
    constructor() {
        super();
        this.state = {
            id:1,
            artist: 'Claude Monet',
            painting: 'Antibes Seen from the Salis Gardens (1888)',
            description: 'Monet chose the vantage point of the Garden of La Salis across the cape from Antibes (he painted three other views of the town from this same garden, captured at different times of day). He positioned himself at the bottom of the garden, close to the water, a large, twisting olive tree dominating the composition. Antibes sparkles in the distance, with the tower of the medieval Château Grimaldi prominent in the center.',
            link:'https://uploads7.wikiart.org/images/claude-monet/antibes-seen-from-the-salis-gardens-01(1).jpg!Large.jpg',
            location:'Toledo Museum of Art (Spain)',
        }
    }

    fetchModernArtists=(e)=> {
        console.log(e.target.innerText)
        fetch(`/get_inspiration?id=${e.target.innerText === "Next" ? Math.min(this.state.id + 1 , 12) : Math.max(this.state.id - 1 , 0)}`)
        .then(
            (response)=> {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' + response.status);
            }
            // Examine the text in the response
            response.text().then((artwork)=> {
                this.setState(JSON.parse(artwork)[0])


            })
            })
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        })
    }

    render(){
        return (
            <div>
                <Navbar activePage = "inspiration"/>
                <div className = "inspirationContent"> 
                    <div className = "inspirationDescription">
                        <h1>{this.state.artist}</h1>
                        <h2>{this.state.painting}</h2>
                        <p>{this.state.description}</p>
                        <p className="inspirationLocation">{this.state.location}</p>
                    </div>
                    <div className = "inspirationPic" style = {{backgroundImage:'url("' + this.state.link + '")'}}>
 
                    </div>
                    <div className = "nextButton" style = {{display:this.state.id == 12?'none':'block'}}>
                        <p onClick = {this.fetchModernArtists}>Next</p> 
                        <div className='upArrow'></div>
                        <div className='downArrow'></div>
                    </div>
                    <div className = "backButton" style = {{display:this.state.id == 1?'none':'block'}}>
                        <p onClick = {this.fetchModernArtists}>Back</p> 
                        <div className='upArrowReversed'></div>
                        <div className='downArrowReversed'></div>
                    </div>
                </div>
            </div>
        )}
    
}

