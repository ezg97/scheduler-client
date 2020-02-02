import React, {Component} from 'react';
import {Route, Switch , NavLink} from 'react-router-dom';

import './App.css'

import InfoContext from '../InfoContext';

import LandingPage from '../LandingPage/LandingPage';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      folders: [],
      notes: []
    };
  }

  //methods


  //render
  render(){


    return (
    <div className="container">

      {/* */}
      <nav className="app_nav">

        <ul>
          <li> <NavLink to="/">Anytime Scheduler</NavLink> </li>
          <li> <p>Demo</p> </li>
        </ul>
      </nav>

      <main role="main">

        {/* MAIN TEXT SECTION */}
        <Switch>
          <Route exact path='/' component={LandingPage} />
          
        </Switch>

      </main>

    </div>
    );
  }
}
  
  

export default App;
