import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions';

const initialState = {
  cart: [],
  totalPrice: String,
  loading: false,
  error: null,
}

export const cartItemReducer = (state=initialState, action) => {
  console.log('In item Reducer', action.items);
    switch (action.type) {

      case ADD_TO_CART :
      return {
        id: action.id,
      }

      case REMOVE_FROM_CART :
      return {
        id: state.id !== action.id
      }
    
    //   case FETCH_CART_REQUEST : 
    //   return Object.assign({}, state, { 
    //     loading: true })

    //   case FETCH_CART_SUCCESS :
    //   return Object.assign({}, state, { 
    //   loading: false, 
    //   items: action.items,
    //   totalPrice: 112121212121, 
    //   error: null
    // })

    //   case FETCH_CART_ERROR :
    //   return Object.assign({}, state, { 
    //   loading: false,
    //   error: action.error
    // })

    default: return state
  }
}

export default cartItemReducer;