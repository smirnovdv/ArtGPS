import React, {Component} from 'react';
import './css/GalleryPage.css';
import Navbar from './Navbar';
import ArtistsMovementsList from './ArtistsMovementsList';


function GalleryPage(){
    return (
        <div className="gallerypage">
            <Navbar/>
            <ArtistsMovementsList/>
        </div>
        )
}

export default GalleryPage;
