import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';


import './OperationsPage.css';



const { business } = require('../Business');

class OperationsPage extends React.Component{ 

    render(){
     
        return(
        <div className="page-container">
                      
            {/* Header */}
            <header className='header'>
                <h1>{business[0].name}</h1>
                <h2>Operations</h2>
            </header>
            
            {/* List of choices */}
            <div className='operations-links'>
                <ul className="navLink">
                    <li> <NavLink to="/employees">Employees</NavLink> </li>
                    <li> <NavLink to="/hours">Operation Hours</NavLink> </li>
                    <li> <NavLink to="/labor">Labor Quantity</NavLink> </li>
                    {/*<li> <NavLink to="/account">Account Settings</NavLink> </li>*/}
                </ul>
                

            </div>
          
        </div>
        );
    }
}


export default OperationsPage;