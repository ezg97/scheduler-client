import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import './HoursPage.css';

const { business } = require('../Business');
const { SelectDayWidget } = require('../SelectDayWidget/SelectDayWidget');
const { hours } = require('../Hours');
const { operationHours } = require('../OperationHours');



class HoursPage extends React.Component{ 

    render(){
     
        return(
        <div>
                      
            {/* Header */}
            <header className='header'>
                <h1>{business[0].name}</h1>
                <h2>Operation Hours</h2>
            </header>

           {/* 
            <Switch>
                <Route exact path='/hours'
                  render={(routeProps) =>
                    <SelectDayWidget
                        selectedDay={'Sun'}
                    />
                } />

            </Switch>
 
            Both iterations not working for some reason? For this reaason I'm not 
            putting the select option in a component even tho it is going to be reused.
            <SelectDayWidget />
            
            <Switch>
                <Route path='/hours' component={SelectDayWidget} />
            </Switch>
            {/* List of choices */}
            <select id='select-day'>
                <option value="None">None</option>
                {operationHours.map(businessDay => 
                    /* This is for demonstration purposes only. In production I would make
                        the "None" option the selected choice */
                    (businessDay.day === "Sunday")
                    ?<option value={businessDay.day} selected>{businessDay.day}</option>
                    :<option value={businessDay.day}>{businessDay.day}</option>
                )}
            </select>
            
           
            <form className="labor-form">

                
                <section className="section-form">

                    <label htmlFor="hours">Open:</label>
                    <select id='hours'> 
                        <option value='0'>Closed</option>

                        {hours.map(hour => 
                            /* This is for demonstration purposes only. In production I would make
                                the "None" option the selected choice */
                                (hour.time === "5AM")
                                ?<option value={hour.time} selected>{hour.time}</option>
                                :<option value={hour.time}>{hour.time}</option>
                        )}
                       
                    </select>
                </section>

                    
                <section className="section-form">

                    <label htmlFor="hours">Close:</label>
                    <select id='hours'>
                        <option value='0'>Closed</option>

                        {hours.map(hour => 
                            /* This is for demonstration purposes only. In production I would make
                                the "None" option the selected choice */
                            (hour.time === "5AM")
                            ?<option value={hour.time} selected>{hour.time}</option>
                            :<option value={hour.time}>{hour.time}</option>
                        )}
                    </select>

                </section>


                <button type='submit' className='submit-labor'>Submit</button>

            </form>
                
                

          
        </div>
        );
    }
}


export default HoursPage;