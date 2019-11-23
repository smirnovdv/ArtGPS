import React from 'react';
import './css/Gallery.css';

//gallery on the homepage
function Gallery(props) {
    const gallery = props.pics.map((pic)=> 
        <img src={`/images/Artists/${props.artist}/${pic}`} alt={pic} srcset=""/>
    );
    return(
        <div className="gallery">{gallery}</div>
    )
}

export default Gallery;