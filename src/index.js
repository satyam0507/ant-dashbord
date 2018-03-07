import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import AppShell from './appShell/AppShell';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import store from './store';
import {Provider} from 'react-redux';
const roolEl =  document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <AppShell/>
        </BrowserRouter>
    </Provider>
,roolEl);
