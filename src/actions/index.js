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
export const fetchItemsError = (error) => ({
  type: FETCH_ITEMS_ERROR,
  error: error
})

// export const ADD_TO_CART_REQUEST = 'ADD_TO_CART_REQUEST';
// export const addToCartRequest = () => ({
//   type: ADD_TO_CART_REQUEST
// })
// export const ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS';
// export const addToCartSuccess = (items, cart, totalPrice) => ({
//   type: ADD_TO_CART_SUCCESS,
//   cart: cart,
//   totalPrice: totalPrice

// })
// export const ADD_TO_CART_ERROR = 'ADD_TO_CART_ERROR';
// export const addToCartError = (error) => ({
//   type: ADD_TO_CART_ERROR,
//   error: error
// })

function fetchItems() {

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

// function handleCartClick(e, items) {
//   const items = this.props.items;
//   console.log(items);
//   const id = e.currentTarget.value;
//   console.log('Added to Cart: ', id)

//   const cartItem = items.filter(item => id === item.id);
//   console.log(cartItem);

//   Object.assign({}, this.state, ({
//     cart: [...this.state.cart, cartItem]
//   }))

//   console.log(this.state)

// }

export default { fetchItems }

// export function addToCart() {
//   return dispatch => {
//     dispatch(addToCartRequest())

//     fetch(`${API_BASE_URL}/items`, {
//       method: 'GET',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       }
//     })
//     .then(res => {
//       if(!res.ok) {
//         return Promise.reject(res.statusText)
//       }
//       const items = res.json();
//       const cart = items.filter(item => item.id === e.id );
//     })
//     .then(items => {
//       dispatch(addToCartSuccess(items))
//     })
//     .catch(error => {
//       dispatch(addToCartError(error))
//     })
//   }
// }

// export function fetchCartItems() {

//   return dispatch => {
//     dispatch(fetchItemsRequest());

//   fetch(`${API_BASE_URL}/:items`, {
//     method: 'GET',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     }
//   })
//     .then(res => {
//       if(!res.ok) {
//         return Promise.reject(res.statusText)
//       }
//       return res.json();
//     })
//     .then(items => {
//       dispatch(fetchItemsSuccess(items))
//     })
//     .catch(error => {
//       dispatch(fetchItemsError(error))
//     })
//   }
// }