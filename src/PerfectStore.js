import React from 'react'
import  {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { NavBar } from './components/ui/NavBar';
import { Home } from './Home';



export const PerfectStore = () => {
    return (
        <Router>
            <NavBar/>
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
        </Router>
        
    )
}
