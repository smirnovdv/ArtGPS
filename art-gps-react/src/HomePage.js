import React, {Component} from 'react';
import './css/Homepage.css';
import Navbar from './Navbar';
import Gallery from './Gallery';
import StartButton from './StartButton';

class HomePage extends  Component {
    constructor(props) {
        super(props);
        this.state = {
            gallery: ["1.jpeg","2.jpeg","3.jpeg","4.jpeg","5.jpeg"]
        }
    }
    render() {
        return (
            <div className="homepage">
                <Navbar/>
                <Gallery pics = {["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"]}/>
                <StartButton/>
            </div>
        )
    }
}

export default HomePage;
