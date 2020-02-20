import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import { Container, Row, Col } from 'react-grid-system';

import './HomePage.css';



const { business } = require('../Business');

class HomePage extends React.Component{ 

    render(){
     
        return(
        <div className="page-container">
                      
            {/* Header */}
            <header className='header'>
                <h1>{business[0].name}</h1>
            </header>

            {/* Scheduling */}
            <div className='operations-links'>
                <ul className="navLink">
                    <li> <NavLink to="/demo">Generate/View Schedule</NavLink> </li>
                    <li> <NavLink to="/operations">Operations</NavLink> </li>
                </ul>
                {/* <section className='scheduling'>
                    <h2> <NavLink to="/demo">Generate/View Schedule</NavLink> </h2>
                </section>

               
                <section className='operations navLink'>
                    <h2> <NavLink to="/operations">Operations</NavLink> </h2>
                    <p>add, edit, delete employees, hours, etc.</p>
                </section> */}
            </div>
            
        </div>
        );
    }
}


export default HomePage;