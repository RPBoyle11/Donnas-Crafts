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

export const ADD_TO_CART_CLICKED = 'ADD_TO_CART_CLICKED';
export const addToCartClicked = () => ({
  type: ADD_TO_CART_CLICKED 
})

export const ADD_TO_WISHLIST_CLICKED = 'ADD_TO_WISHLIST_CLICKED';
export const addToWishlistClicked = () => ({
  type: ADD_TO_WISHLIST_CLICKED 
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
export const fetchItemsError = () => ({
  type: FETCH_ITEMS_ERROR
})

export default function fetchItems() {

  return dispatch => {
    dispatch(fetchItemsRequest());

  fetch(`${API_BASE_URL}/items`, {
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
