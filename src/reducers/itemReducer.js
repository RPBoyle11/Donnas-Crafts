import { FETCH_ITEMS_REQUEST, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_ERROR, ADD_TO_CART, REMOVE_FROM_CART, FILTER_ITEMS } from '../actions';

const initialState = {
  items: [],
  loading: false,
  error: null,
  cart: [],
  filter:[],
  wishList: [],
  totalPrice: 0
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
        totalPrice: state.cart.concat(action.cartItem[0].price)
      })

    case REMOVE_FROM_CART:
      console.log('Remove from cart', action.cartItem[0].id);
      return Object.assign({}, state, {
        cart: state.cart.filter(item => item.id !== action.cartItem[0].id)
      })

      case FILTER_ITEMS:
      console.log('Items have been filtered');
      return Object.assign({}, state, {
        filter: action.filteredItems
      })

    default: return state
  }
}

export default itemReducer;