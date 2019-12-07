import React, { Component } from 'react'

export default class TestPage extends Component {
    constructor(){
        super(props),
        this.state = {
            testPairNum: 0,
            scoreTable: {}
        }
    }
    render() {
        return (
            <div>
                 <div onClick={nextPair} className = "testPic" style = {{backgroundImage:'url("' + ? + '")'}}></div>
                 <div onClick={nextPair} className = "testPic" style = {{backgroundImage:'url("' + ? + '")'}}></div>
            </div>
        )
    }
}
