import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
// import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

// const logger = createLogger();
const store = createStore(reducers, applyMiddleware(thunk));
// const store = createStore(reducers, applyMiddleware(logger, thunk));

// store.subscribe(()=>
// 	console.log('from store', store.getState())
// );

export default store;


