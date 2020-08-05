import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";
import { Form } from '../components/Form/Form';
import { Task } from '../components/Task';
import '../App.css';

export default function Routing() {

    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/Form">Form</Link>
                        </li>
                        <li>
                            <Link to="/Task">Task</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/form" component={Form}>
                        <Form/>
                    </Route>
                    <Route path="/task" component={Task}>
                        <Task/>
                    </Route>
                    <Redirect from='/' to="/form"/>
                </Switch>
            </div>
        </Router>
    )
};