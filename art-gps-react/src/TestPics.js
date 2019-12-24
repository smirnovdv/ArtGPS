import React, { Component } from 'react';
import NavItem from './NavItem';
const Link = require("react-router-dom").Link;


export default class TestPics extends Component {
    constructor(props){
        super(props);
        this.state = {
            testNum: 2,
            testPairData:[{
                id: 1,
                artist: "Claude Monet",
                painting: "Antibes Seen from the Salis Gardens (1888)",
                description: "Monet chose the vantage point of the Garden of La Salis across the cape from Antibes (he painted three other views of the town from this same garden, captured at different times of day). He positioned himself at the bottom of the garden, close to the water, a large, twisting olive tree dominating the composition. Antibes sparkles in the distance, with the tower of the medieval Château Grimaldi prominent in the center.",
                link: "https://uploads7.wikiart.org/images/claude-monet/antibes-seen-from-the-salis-gardens-01(1).jpg!Large.jpg",
                location: "Toledo Museum of Art (Spain)"    
                },
                {id: 3,
                artist: "Andy Warhol",
                painting: "Marilyn",
                description: "In 1967, Warhol established a print-publishing business, Factory Additions, through which he published a series of screenprint portfolios on his signature subjects. Marilyn Monroe was the first one. He used the same publicity still of the actress that he had previously used for dozens of paintings. Each image here was printed from five screens: one that carried the photographic image and four for different areas of color, sometimes printed off-register. ",
                link: "https://uploads1.wikiart.org/images/andy-warhol/marilyn-1.jpg!Large.jpg",
                location: "Museum of Modern Art (USA)"}],
            scoreArray: [],
            resultCSS:{visibility:"hidden"}
        }
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
        if (this.state.testNum < 11) {
            const target = e.target;
            this.setState((state, props) => ({
                testNum:state.testNum + 1,
                scoreTable:state.scoreArray.push(target.getAttribute('data-artist'))}
            ));
            this.fetchTest(this.state.testNum)
        }
        else {
            this.setState({resultCSS:{visibility:"visible"}})
        }
    };

    render() {
        return (
            <div className="test">
                <h1>Let's find who is you favorite artist. Pick the painting you like the most!</h1>
                <div className="testPics">
                    <div onClick={this.nextPair} className = "testPic" style = {{backgroundImage:'url("' + this.state.testPairData[0].link + '")'}} data-artist = {this.state.testPairData[0].artist}></div>
                    <div onClick={this.nextPair} className = "testPic" style = {{backgroundImage:'url("' + this.state.testPairData[1].link + '")'}} data-artist = {this.state.testPairData[1].artist}></div>
                </div>
                <div className="testResult" style = {this.state.resultCSS}>
                    <h1>Your favorite artist:</h1>
                    <h2>{this.findMostFrequent(this.state.scoreArray)[0]}</h2>
                    <p>Learn more about these artworks</p> 
                    <NavItem name="gallery"/>
                    <p>Already an expert? Check you knowledge</p>  
                    <NavItem name="challenge"/>
                </div>            
            </div>
        )
    }
}
