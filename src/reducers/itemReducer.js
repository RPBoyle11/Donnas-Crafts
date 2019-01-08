import { FETCH_ITEMS_REQUEST, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_ERROR } from '../actions';

const initialState = {
  items: [],
  loading: false,
  error: null,
}

export const itemReducer = (state=initialState, action) => {
  console.log('In item Reducer', action.items);
    switch (action.type) {

    
      case FETCH_ITEMS_REQUEST : 
      return Object.assign({}, state, { loading: true })

      case FETCH_ITEMS_SUCCESS :
      return Object.assign({}, state, { 
      loading: false, 
      items: action.items, 
      error: null
    })

      case FETCH_ITEMS_ERROR :
      return Object.assign({}, state, { 
      loading: false,
      error: action.error
    })

    default: return state
  }
}

export default itemReducer;