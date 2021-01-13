import React from 'react';
import {Switch, Route, NavLink} from 'react-router-dom';
import TaskForm from "../containers/TaskForm";
import NewTask from "../containers/NewTask";
import "./App.css";

function App ({ setFormActive }) {

    return (
        <div className="app">
            <nav>
                <NavLink to='/'>home</NavLink>
                <NavLink to='/cards'>cards</NavLink>
            </nav>
            <Switch>
                <Route path='/' exact>
                    <div className="card">
                        <div className="userInfo">
                            <button onClick={setFormActive} className="openForm">+</button>
                            <TaskForm />
                        </div>
                    </div>
                    </Route>
                    <Route path='/cards'>
                        <NewTask />
                    </Route>
            </Switch>
        </div>
    )
}

export default App;