import React, {Component} from 'react';
import './css/Homepage.css';
import Navbar from './Navbar';
import Gallery from './Gallery';
import StartButton from './StartButton';

//Home page
export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gallery: ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"]
        }
    }
    componentDidMount() {
        fetch(`https://art-gps-server.herokuapp.com/get_test?id=1`)
        .then(
            (response)=> {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' + response.status);
            }
            // Examine the text in the response
            response.text().then((artworks)=> {
                console.log('server wake up call successful')

            })
            }
        )
        .catch(function(err) {
            console.log('server wake up call failed', err);
        })
        
    }
    render() {
        return (
            <div className="homepage">
                <Navbar activePage="home"/>
                <Gallery pics = {this.state.gallery} artist={"home"}/>
                <StartButton/>
            </div>
        )
    }
}

