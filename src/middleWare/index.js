import {applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from "redux-saga";


export const sagaMiddleware = createSagaMiddleware();
const logger  = createLogger();

export const middleWare = applyMiddleware(sagaMiddleware,logger);


