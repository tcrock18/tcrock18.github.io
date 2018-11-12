import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-globally'

import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './Routing'
import * as serviceWorker from './serviceWorker';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialGlobalState = {
    userName: ''
}

ReactDOM.render(
    <Provider globalState={initialGlobalState}>
        <Router>
            <Routing />
        </Router>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
