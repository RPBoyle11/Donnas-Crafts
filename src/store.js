
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import itemReducer from './reducers/itemReducer';

export default createStore(
  combineReducers({
    itemReducer
  }),
  applyMiddleware(thunk)
)