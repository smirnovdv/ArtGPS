import React, {Component} from 'react';
import './css/InspirationPage.css';
import Navbar from './Navbar';

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

    //method that gets data from API by pic id and updates state
    fetchDirectId = (id) => {
        fetch(`https://art-gps-server.herokuapp.com/get_inspiration?id=${id}`,{
              mode: 'cors'
       })
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

    navigationClicks = (e) => {
        if (e.target.innerText === "Next") {
            this.fetchDirectId(Math.min(this.state.id + 1 , 12));
        }
        else{
            this.fetchDirectId(Math.max(this.state.id - 1 , 0));
        }
    }

    componentDidMount() {
        let artworkNum = this.props.location.search;
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
                <Navbar activePage = "gallery"/>
                <div className = "inspirationContent"> 
                    <div className = "inspirationDescription">
                        <h1>{this.state.artist}</h1>
                        <h2>{this.state.painting}</h2>
                        <p>{this.state.description}</p>
                        <p className="inspirationLocation">{this.state.location}</p>
                    </div>
                    <div className = "inspirationNavigation">
                        <div className = "nextButton" style = {{display:this.state.id === 12?'none':'block'}}>
                            <p onClick = {this.navigationClicks}>Next</p> 
                            <div className='upArrow'></div>
                            <div className='downArrow'></div>
                        </div>
                        <div className = "backButton" style = {{display:this.state.id === 1?'none':'block'}}>
                            <p onClick = {this.navigationClicks}>Back</p> 
                            <div className='upArrowReversed'></div>
                            <div className='downArrowReversed'></div>
                        </div>
                    </div>
                    <div className = "inspirationPic" style = {{backgroundImage:'url("' + this.state.link + '")'}}>
                    </div>
                </div>
            </div>
        )}
    
}

