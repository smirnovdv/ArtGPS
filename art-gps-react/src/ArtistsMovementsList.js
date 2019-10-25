import React from 'react';
import './css/ArtistsMovementsList.css';

//Component for gallery page, features artists and their schools
function ArtistsMovementsList() {
     return(
        <div className="ArtistsMovementsList">
            {/* everything is hardcorded here, because of many different <spans> to style diffent letters,TODO: may be simpligied with JS and props into standart <li> Component   */}
            <p><span className="colored">A</span>rtists/<span className="colored">M</span>ovements</p>
            {/* Arrow divs underline text when line is hovered */}
            <ul>
                <li>
                    <span className="artist">Andy Warhol</span>.......<span className="movement">Pop<span className="colored">-</span>art</span>     
                    <div className='upArrow'></div>
                    <div className='downArrow'></div>
                </li>
                <li>
                    <span className="artist">Claude Monet</span>.......<span className="movement">Impress<span className="colored">i</span>on<span className="colored"></span>ism</span>
                    <div className='upArrow'></div>
                    <div className='downArrow'></div>
                </li>
                <li>
                    <span className="artist">Gustav Klimt</span>.......<span className="movement">Symbol<span className="colored">i</span>sm</span> 
                    <div className='upArrow'></div>
                    <div className='downArrow'></div>
                </li>
                <li>
                    <span className="artist">Kazimir Malevich</span>.......<span className="movement">Futur<span className="colored">i</span>sm</span> 
                    <div className='upArrow'></div>   
                    <div className='downArrow'></div>
                </li>
                <li>
                    <span className="artist">Pablo Picasso</span>.......<span className="movement">Cub<span className="colored">i</span>sm</span>
                    <div className='upArrow'></div>
                    <div className='downArrow'></div>
                </li>
                    <li><span className="artist">Salvador Dali</span>.......<span className="movement">Surreal<span className="colored">i</span>sm</span> 
                    <div className='upArrow'></div>
                    <div className='downArrow'></div>
                </li>
            </ul>
        </div>
    )
}

export default ArtistsMovementsList;