import React, {Component} from 'react';
import './css/App.css';
import HomePage from './HomePage';
import './css/GalleryPage.css';
import GalleryPage from './GalleryPage';
import ChallengePage from './ChallengePage';
import InspirationPage from './InspirationPage'
import ArtistPage from './ArtistPage';
import TestPage from './TestPage';
const Router = require("react-router-dom").BrowserRouter;
const Route = require("react-router-dom").Route;

//this is the key routing Component. 

class App extends Component {
  render() {
    return (
    <Router> 
      <Route path='/gallery/artist' component={ArtistPage}/>
      <Route path='/inspiration' component={InspirationPage}/>
      <Route path='/' exact component={HomePage}/>
      <Route path='/startChallenge' exact component={ChallengePage}/>
      <Route path='/challenge' exact component={ChallengePage}/>
      <Route path='/gallery' exact component={GalleryPage}/>
      <Route path='/test' component={TestPage}/>
    </Router>
    );
  };
};

export default App;
