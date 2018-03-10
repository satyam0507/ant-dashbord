import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import AppShell from './appShell/AppShell';
import {Router,Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import store from './store';
import {Provider} from 'react-redux';
import {AUTHENTICATE_USER} from './actions/const';

const customHistory = createBrowserHistory()
const roolEl =  document.getElementById('root');

store.dispatch({type:AUTHENTICATE_USER});
ReactDOM.render(
    <Provider store={store}>
        <Router history={customHistory}>
            <Route component={AppShell}/> 
        </Router>
    </Provider>
,roolEl);
