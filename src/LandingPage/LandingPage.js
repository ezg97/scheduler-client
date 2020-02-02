import React from 'react';
import { NavLink } from 'react-router-dom';

import './LandingPage.css';

class LandingPage extends React.Component{ 
    
    render(){


        return(
        <div>
            <header role="banner">
            
            <h1>Work made easy.</h1>
            <button>Sign up!</button>
            </header>


            {/* SECTION ONE*/}
            <section>

            <header>
                <h3>Instant Scheduling</h3>
            </header>

            <p>Generate schedules for employees and managers to veiw 
                for any department, at any time, unlimited times!</p>
            </section>


            {/* SECTION TWO*/}
            <section>

            <header>
                <h3>Full Control</h3>
            </header>

            <p>You have full control of the hour of operations of the 
                business, how many employees to staff per hour of each 
                day, and how far in advance you'd like to generate schedules.</p>
            </section>

            {/* SECTION THREE*/}
            <section>

            <header>
                <h3>Accessibility</h3>
            </header>

            <p>You have full, unlimited access, to view the generated schedule
                and can print and share via email.</p>
            </section>
        </div>
        );
    }
}


export default LandingPage;