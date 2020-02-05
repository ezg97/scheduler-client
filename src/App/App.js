import React, {Component} from 'react';
import {Route, Switch , NavLink} from 'react-router-dom';

import './App.css'

import InfoContext from '../InfoContext';

import LandingPage from '../LandingPage/LandingPage';
import Demo from '../Demo/Demo';
import NavBar from '../NavBar/NavBar'
import HomePage from '../HomePage/HomePage';
import OperationsPage from '../OperationsPage/OperationsPage';
import EmployeesPage from '../EmployeesPage/EmployeesPage';
import ManagementPage from '../ManagementPage/ManagementPage';
import LaborPage from '../LaborPage/LaborPage';
import HoursPage from '../HoursPage/HoursPage';




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

      {/* NAV BAR */}
      <Switch>

          {/* LANDING PAGE */}
          <Route exact path='/'
            render={(routeProps) =>
              <NavBar
                bool={'false'}
              />
            }
          />

          {/* SIGNED IN */}
          <Route 
            exact path={['/demo','/home','/operations','/employees',
            '/management','/labor','/hours']}
            render={(routeProps) =>
              <NavBar
                bool={'true'}
              />
            }
          />

      </Switch>

      <main role="main">

        {/* MAIN TEXT SECTION */}
        <Switch>
          <Route exact path='/' component={LandingPage} />

          <Route exact path='/demo' component={Demo} />

          <Route exact path='/home' component={HomePage} />

          <Route exact path='/operations' component={OperationsPage} />

          <Route exact path='/employees' component={EmployeesPage} />

          <Route exact path='/management' component={ManagementPage} />

          <Route exact path='/labor' component={LaborPage} />

          <Route exact path='/hours' component={HoursPage} />
          
        </Switch>

      </main>

    </div>
    );
  }
}
  
  

export default App;
