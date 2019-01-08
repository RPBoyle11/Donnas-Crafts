
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import itemReducer from './reducers/itemReducer';
// import navReducer from './reducers/navReducer';

export default createStore(
  combineReducers({
    itemReducer
  }),
  applyMiddleware(thunk)
)