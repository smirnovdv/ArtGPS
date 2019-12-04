import React from 'react'
import './css/StartChallenge.css'

export default function StartChallenge(props) {
    return (
        <div>
            <div className="startChallenge">
                <h1>Want to check your art knowledge? Try a test!</h1>
                <h2>You get 60 seconds to answer as many questions as you can</h2>
                <p>The faster you answer the higher your score</p>
                <div onClick={props.startFunction}>Start Challenge</div>
            </div>
        </div>
    )
}

