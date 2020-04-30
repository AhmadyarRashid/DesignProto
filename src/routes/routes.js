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
import HomePage4 from '../pages/Home4';
import StepsPage from '../pages/Steps';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/1" component={HomePage2}/>
                <Route exact path="/2" component={HomePage3}/>
                <Route exact path="/3" component={HomePage4}/>
                <Route exact path="/4" component={StepsPage} />
            </Switch>
        </Router>
    )
}
