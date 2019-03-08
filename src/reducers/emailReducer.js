import { CONFIRM_EMAIL_REQUEST, CONFIRM_EMAIL_SUCCESS, CONFIRM_EMAIL_ERROR } from '../actions/email';

const initialState = {
  confirming: false, 
  message: '', 
  error: null
};

export default function emailReducer(state = initialState, action) {
  switch(action.type) {
    case CONFIRM_EMAIL_REQUEST: return {confirming: true, message: 'You\'re order is confirmed.' , error: null};
    case CONFIRM_EMAIL_SUCCESS: return {...state, message: action.data.message, confirming: false};
    case CONFIRM_EMAIL_ERROR: return {confirming: false, message: 'You\'re order could not be confirmed.  Please try again', error: action.err};
    default: return state;
  }
}