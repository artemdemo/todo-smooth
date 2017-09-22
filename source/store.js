import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducersMap from './reducers';

const reducers = combineReducers(reducersMap);

const store = createStore(reducers, applyMiddleware());

export default store;
