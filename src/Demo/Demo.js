import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import { Container, Row, Col } from 'react-grid-system';

import './Demo.css';

import ViewSchedule from '../ViewSchedule/ViewSchedule';


const { employees } = require('../Employees');

class Demo extends React.Component{ 
    /*handleSelectedDay = () => {
        console.log(document.getElementById("mySelect").value)
        return document.getElementById("mySelect").value;
    }*/

    
 
    render(){
     
        return(
        <div>
            <header className='header'>
                <h1>Weekly Schedule.</h1>
            </header>

        <select id='mySelect'>
                <option value="None">None</option>
                <option value="Sun" selected>Sunday</option>
                <option value="Mon">Monday</option>
                <option value="Tues">Tuesday</option>
                <option value="Wed">Wednesday</option>
                <option value="Thurs">Thursday</option>
                <option value="Fri">Friday</option>
                <option value="Sat">Saturday</option>
            </select>

            {/* SECTION ONE*/}
            <Switch>
                <Route exact path='/Demo'
                  render={(routeProps) =>
                    <ViewSchedule
                        selectedDay={'Sun'}
                    />
                } />

            </Switch>
            
        </div>
        );
    }
}


export default Demo;