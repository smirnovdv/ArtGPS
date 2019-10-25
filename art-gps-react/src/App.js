import React, {Component} from 'react';
import './css/App.css';
import HomePage from './HomePage';
import './css/GalleryPage.css';
import GalleryPage from './GalleryPage';
const Router = require("react-router-dom").BrowserRouter;
const Route = require("react-router-dom").Route;

//this is key routing Component. App build for 1920*1080, nothing is responsive at the moment

class App extends Component {
  render() {
    return (
    <Router>
      <Route path='/' exact render = {
        () => {
          return <HomePage/>
        }
      }/>
      <Route path='/gallery' exact render = {
        () => {
          return <GalleryPage/>
        }
      }/>
    </Router>
    );
  };
};

export default App;
