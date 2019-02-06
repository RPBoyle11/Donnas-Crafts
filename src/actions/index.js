import { API_BASE_URL } from '../config';

export const MENU_CLICKED = 'MENU_CLICKED';
export const menuClicked = () => ({
  type: MENU_CLICKED 
})

export const SEARCH_BUTTON_CLICKED = 'SEARCH_BUTTON_CLICKED';
export const searchButtonClicked = () => ({
  type: SEARCH_BUTTON_CLICKED 
})

export const ACCOUNT_INFO_CLICKED = 'ACCOUNT_INFO_CLICKED';
export const accountInfoClicked = () => ({
  type: ACCOUNT_INFO_CLICKED 
})

export const SHOPPING_CART_CLICKED = 'SHOPPING_CART_CLICKED';
export const shoppingCartClicked = () => ({
  type: SHOPPING_CART_CLICKED 
})

export const ADD_TO_CART = 'ADD_TO_CART';
export const addToCart = (cartItem) => ({
  type: ADD_TO_CART,
  cartItem,
})

export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const removeFromCart = (cartItem) => ({
  type: REMOVE_FROM_CART,
  cartItem
})

export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
export const addToWishlist = () => ({
  type: ADD_TO_WISHLIST 
})

export const FILTER_ITEMS = 'FILTER_ITEMS';
export const filterItems = (filteredItems) => ({
  type: FILTER_ITEMS,
  filteredItems
})

export const FETCH_ITEMS_REQUEST = 'FETCH_ITEMS_REQUEST';
export const fetchItemsRequest = () => ({
  type: FETCH_ITEMS_REQUEST
})

export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const fetchItemsSuccess = (items) => ({
  type: FETCH_ITEMS_SUCCESS,
  items: items
})

export const FETCH_ITEMS_ERROR = 'FETCH_ITEMS_ERROR';
export const fetchItemsError = (error) => ({
  type: FETCH_ITEMS_ERROR,
  error: error
})

function fetchItems() {

  return dispatch => {
    dispatch(fetchItemsRequest());

  fetch(`${API_BASE_URL}/api/items`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      if(!res.ok) {
        return Promise.reject(res.statusText)
      }
      return res.json();
    })
    .then(items => {
      dispatch(fetchItemsSuccess(items))
    })
    .catch(error => {
      dispatch(fetchItemsError(error))
    })
  }
}

export default { fetchItems }