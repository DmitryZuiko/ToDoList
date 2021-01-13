import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import './index.css';
import App from './containers/App';
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer);

ReactDOM.render((
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>
    ),
    document.getElementById('root')
);