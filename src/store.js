import {createStore} from 'redux';
import reducer from './reducers';
import {middleWare,sagaMiddleware} from './middleWare';
import sagas from './sagas';

export default createStore(reducer,middleWare);
sagaMiddleware.run(sagas);