import React from 'react';
import './css/Gallery.css';

//gallery on the homepage
export default function Gallery(props) {
    const gallery = props.pics.map((pic)=> 
        <img key="pic" src={`/images/Artists/${props.artist}/${pic}`} alt={pic} srcset=""/>
    );
    return(
        <div className="gallery">{gallery}</div>
    )
}
