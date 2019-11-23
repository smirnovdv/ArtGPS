import React from 'react'
import './css/StartChallenge.css'

export default function StartChallenge(props) {
    return (
        <div>
            <div className="startChallenge">
                <h1>Want to check your art knowledge?</h1>
                <h2>You get 60 seconds to guess names of some of the most famous masterpieces</h2>
                <p>The faster you answer the higher your score</p>
                <div onClick={props.startFunction}>Start Challenge</div>
            </div>
        </div>
    )
}

