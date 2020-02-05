import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import './EmployeesPage.css';

const { business } = require('../Business');
const { employees } = require('../Employees');

class EmployeesPage extends React.Component{ 

    render(){
     
        return(
        <div>
                      
            {/* Header */}
            <header className='header'>
                <h1>{business[0].name}</h1>
                <h2>Employees</h2>
            </header>
            
            {/* List of choices */}
            <select id='select-employees'>
                <optgroup label='Other'>
                    <option value="None">None</option>
                    <option value="add">Add Employee</option>
                </optgroup>

                <optgroup label='Employees'>
                    {employees.map(employee => 
                        /* This is for demonstration purposes only. In production I would make
                            the "None" option the selected choice */
                        (employee.name === "John Diggle")
                        ?<option value={employee.name} selected>{employee.name}</option>
                        :<option value={employee.name}>{employee.name}</option>
                    )}
                </optgroup>

            </select>

           
            <form className="employee-form">

                <section className="section-form">
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="name-box" 
                    name="name" id="name" value="John Diggle"/>
                </section>

                <section className="section-form">
                    <label htmlFor="availability">Availability:</label>
                    <select id='availability'>
                        <option value="FT" selected>Full Time</option>
                        <option value="PT">Part Time</option>
                    </select>
                </section>

                <button type='submit' className='submit-employee'>Submit</button>
                <button type='submit' className='submit-employee' name='delete' value='delete'>Delete</button>

            </form>
                
                

          
        </div>
        );
    }
}


export default EmployeesPage;