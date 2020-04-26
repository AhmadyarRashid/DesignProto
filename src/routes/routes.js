import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import HomePage from '../pages/Home';
import HomePage2 from '../pages/Home2';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>

                <Route exact path="/home2" component={HomePage2}/>
            </Switch>
        </Router>
    )
}
