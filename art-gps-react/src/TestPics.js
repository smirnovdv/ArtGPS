import React, { Component } from 'react';
import NavItem from './NavItem';

export default class TestPics extends Component {
    constructor(props){
        super(props);
        this.state = {
            testNum: 1,
            testPairData:[
                {
                id: "",
                artist: "",
                painting: "",
                description: "",
                link: "",
                location: ""    
                },
                {
                id: "",
                artist: "",
                painting: "",
                description: "",
                link: "",
                location: ""  
                }
            ],
            scoreArray: [],
            resultCSS:{visibility:"hidden"},
            testLength:10,
            animation: "flip-in-hor-bottom"
        }
    }
    componentDidMount(){
        this.fetchTest(this.state.testNum)
    }

    fetchTest(id) {
        fetch(`https://art-gps-server.herokuapp.com/get_test?id=${id}`,
        {mode: 'cors'})
        .then(
            (response)=> {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' + response.status);
            }
            // Examine the text in the response
            response.text().then((artworks)=> {
                console.log(JSON.parse(artworks))
                this.setState({testPairData:JSON.parse(artworks)
                })
            })
            })
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        })
    }

    findMostFrequent(arr) {
        return arr
          .reduce((mode, curValue, curIndex, arr) => {
            if (arr.indexOf(curValue) === curIndex) {
              return [...mode, [curValue, 1]];
            } else {
              mode[mode.indexOf(mode.find(e => e[0] === curValue))] = [
                curValue,
                mode[mode.indexOf(mode.find(e => e[0] === curValue))][1] + 1
              ];
              return mode;
            }
          }, [])
          .sort((a, b) => b[1] - a[1])
          .filter((curValue, curIndex, arr) => curValue[1] === arr[0][1])
          .map(curValue => curValue[0]);
    }

    nextPair = (e) => {
        if (this.state.testNum < this.state.testLength) {
            const target = e.target;
            setTimeout(()=>{
                this.setState((state, props) => ({
                    testNum:state.testNum + 1,
                    scoreTable:state.scoreArray.push(target.getAttribute('data-artist')),
                    animation:"flip-in-hor-bottom"
                }
                ));
                this.fetchTest(this.state.testNum)
            },500)
            this.setState({animation:"flip-out-hor-top"})
           
        }
        else {
            this.setState({resultCSS:{visibility:"visible"}})
        }
    };

    render() {
        return (
            <div className="test">
                <h1>Let's find who is you favorite artist. Pick one painting you like the most!</h1>
                <div className="testPics">
                    <div onClick={this.nextPair} className = {"testPic " + this.state.animation} style = {{backgroundImage:'url("' + this.state.testPairData[0].link + '")'}} data-artist = {this.state.testPairData[0].artist}></div>
                    <div className="arrowsLeftRight"></div>
                    <div onClick={this.nextPair} className = {"testPic " + this.state.animation} style = {{backgroundImage:'url("' + this.state.testPairData[1].link + '")'}} data-artist = {this.state.testPairData[1].artist}></div>
                </div>
                <h1>{this.state.testNum} of {this.state.testLength}</h1>
                <div className="testResult" style = {this.state.resultCSS}>
                    <h1>Your favorite artist:</h1>
                    <h2>{this.findMostFrequent(this.state.scoreArray)[0]}</h2>
                    <p>Learn more about these artworks</p> 
                    <NavItem name="gallery" active="active"/>
                    <p>Already an expert? Check you knowledge</p>  
                    <NavItem name="challenge" active="active"/>
                </div>            
            </div>
        )
    }
}
