import React, {Component} from 'react';
import './css/Homepage.css';
import Navbar from './Navbar';
import Gallery from './Gallery';
import StartButton from './StartButton';

//Home page
class HomePage extends  Component {
    constructor(props) {
        super(props);
        this.state = {
            gallery: ["1.png","2.png","3.png","4.png","5.png","6.png"]
        }
    }
    render() {
        return (
            <div className="homepage">
                <Navbar activePage="home"/>
                <Gallery pics = {this.state.gallery}/>
                <StartButton/>
            </div>
        )
    }
}

export default HomePage;
