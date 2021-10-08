import React from 'react'
import { Provider } from 'react-redux';
import  {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { NavBar } from './components/ui/NavBar';
import { Home } from './Home';
import { store } from './store/store';



export const PerfectStore = () => {
    return (
        <Provider store={store}>
        <Router>
            <NavBar/>
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
        </Router>
        </Provider>
        
    )
}
