import {createStore} from 'redux';
import reducer from './reducers';
import middleWare from './middleWare';

export default createStore(reducer,middleWare);