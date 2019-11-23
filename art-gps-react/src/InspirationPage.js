import React, {Component} from 'react';
import './css/InspirationPage.css';
import Navbar from './Navbar';
import ChallengePic from './ChallengePic';
import StartChallenge from './StartChallenge';



export default class ChallengePage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id:'',
            artist: '',
            painting: '',
            description: '',
            link:'',
            location:'',
        }
    }

    fetchDirectId = (id) => {
        fetch(`/get_inspiration?id=${id}`)
        .then(
            (response)=> {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' + response.status);
            }
            // Examine the text in the response
            response.text().then((artwork)=> {
                console.log(artwork)
                this.setState(JSON.parse(artwork)[0])
            })
            })
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        })
    }

    fetchModernArtists = (e) => {
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
    componentDidMount() {
        let artworkNum = this.props.location.search;
        console.log(artworkNum)
        if (artworkNum){
            this.fetchDirectId(artworkNum.replace("?img=",""))
        }
        else{
            this.fetchDirectId(1)
        }
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

