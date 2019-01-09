import { FETCH_CART_REQUEST, FETCH_CART_SUCCESS, FETCH_CART_ERROR } from '../actions';

const initialState = {
  items: [],
  totalPrice: String,
  loading: false,
  error: null,
}

export const cartReducer = (state=initialState, action) => {
  console.log('In item Reducer', action.items);
    switch (action.type) {

    
      case FETCH_CART_REQUEST : 
      return Object.assign({}, state, { 
        loading: true })

      case FETCH_CART_SUCCESS :
      return Object.assign({}, state, { 
      loading: false, 
      items: action.items,
      totalPrice: 112121212121, 
      error: null
    })

      case FETCH_CART_ERROR :
      return Object.assign({}, state, { 
      loading: false,
      error: action.error
    })

    default: return state
  }
}

export default cartReducer;