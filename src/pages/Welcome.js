import React from 'react';
import {Route} from 'react-router-dom'

const Welcome = () => {
    return (
        <section>
           <h1>Welcome to the team!!!</h1> 
           <Route path="welcome/new-user"></Route>
           <p>Welcome, new user</p>
        </section>
    );
}

export default Welcome;
