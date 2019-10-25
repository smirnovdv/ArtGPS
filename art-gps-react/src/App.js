import React, {Component} from 'react';
import './css/App.css';
import HomePage from './HomePage';
import './css/GalleryPage.css';
import GalleryPage from './GalleryPage';
const Router = require("react-router-dom").BrowserRouter;
const Route = require("react-router-dom").Route;


class App extends Component {
  render() {
    return (
    <Router>
      <Route path='/' exact render = {
        () => {
          return (<HomePage/>)
        }
      }/>
      <Route path='/gallery' exact render = {
        () => {
          return (<GalleryPage/>)
        }
      }/>
    </Router>
    );
  }
}

export default App;
