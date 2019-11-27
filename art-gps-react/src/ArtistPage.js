import React from 'react'
import Navbar from './Navbar';
import Gallery from './Gallery';
import './css/ArtistPage.css'
const Router = require("react-router-dom").BrowserRouter;
const Link = require("react-router-dom").Link;

export default class ArtistPage extends React.Component {
    artists = {
        warhol:{name:"Andy Warhol",
                gallery:["2.jpeg","4.jpeg","3.jpeg","5.jpeg","6.jpeg","7.jpeg"]},
        picasso:{name:"Pablo Picasso",
                gallery:["10.jpeg","2.jpeg","3.jpeg","4.jpeg","9.jpeg","5.jpeg"]},
                dali:{name:"Salvador Dali",
                gallery:[]}
        }
    
    render = () => {
        let artist = this.props.location.search.replace("?name=","")
        return (
            <div className={artist}>
                <Navbar/>
                <p>{this.artists[artist].name}</p>
                <div className={`${artist}Pic`}></div>
                <div className="artistGallery">
                    <Gallery pics = {this.artists[artist].gallery} artist={artist}/>
                </div>
                <Link to='/gallery'>
                    <div className = {"nextButton"+artist}>
                        <p>Back to Gallery</p> 
                    </div>
                </Link>
                
            </div>
        )
    }
}
