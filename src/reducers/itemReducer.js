import { FETCH_ITEMS_REQUEST, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_ERROR, ADD_TO_CART, REMOVE_FROM_CART } from '../actions';

const initialState = {
  items: [],
  loading: false,
  error: null,
  cart: [],
  wishList: []
}

export const itemReducer = (state = initialState, action) => {
  console.log('In item Reducer', action.items);
  switch (action.type) {

    case FETCH_ITEMS_REQUEST:
      return Object.assign({}, state, {
        loading: true
      })

    case FETCH_ITEMS_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        items: action.items,
        error: null
      })

    case FETCH_ITEMS_ERROR:
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      })

    case ADD_TO_CART:
      return Object.assign({}, state, {
        cart: state.cart.concat(action.cartItem),
      })

    case REMOVE_FROM_CART:
      console.log(state, action.cartItem);
      return Object.assign({}, state, {
        cart: state.cart.filter(item => item.id !== action.cartItem.id)
      })

    default: return state
  }
}

export default itemReducer;