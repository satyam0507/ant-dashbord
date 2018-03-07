import {applyMiddleware} from 'redux';
import auth from './auth';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

const logger  = createLogger();

const middleWare = applyMiddleware(auth,thunk,logger);

export default middleWare;