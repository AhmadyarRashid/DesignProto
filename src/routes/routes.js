import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import HomePage from '../pages/Home';
import HomePage2 from '../pages/Home2';
import HomePage3 from '../pages/Home3';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>

                <Route exact path="/1" component={HomePage2}/>
                <Route exact path="/2" component={HomePage3}/>
            </Switch>
        </Router>
    )
}
