import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';

//pages
import Main from './pages/Main';
import HomePage from './pages/HomePage';
import AboutMe from './pages/AboutMe';

import pageName from './reducers/pageReducer';

const app = document.getElementById('app');

const mainReducer = combineReducers({
    pageName 
});

ReactDOM.render(
    <Provider store={createStore(mainReducer)}> 
        <Main />
    </Provider>,
app);



