import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import AppShell from './appShell/AppShell';


import {BrowserRouter,Route,Switch} from 'react-router-dom';

const roolEl =  document.getElementById('root');

ReactDOM.render(
    <BrowserRouter>
        <AppShell/>
    </BrowserRouter>
,roolEl);
