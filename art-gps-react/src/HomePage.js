import React, {Component} from 'react';
import './css/Homepage.css';
import Navbar from './Navbar';
import Gallery from './Gallery';
import StartButton from './StartButton';

//Home page, TODO: optimize image sizes
class HomePage extends  Component {
    constructor(props) {
        super(props);
        this.state = {
            gallery: ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"]
        }
    }
    render() {
        return (
            <div className="homepage">
                <Navbar/>
                <Gallery pics = {this.state.gallery}/>
                <StartButton/>
            </div>
        )
    }
}

export default HomePage;
