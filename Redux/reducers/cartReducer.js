import {ADD_TO_CART, REMOVE_FROM_CART, BOOK_SUCCESS, BOOK_ERROR, UPDATE_TOTAL_PRICE, UPDATE_ITEM, CART_EMPTY, LOAD_CART} from '../actions/constants'

let initialState = {
  items: [],
  error: null,
  total_price: null
}

const cartReducer = (state=initialState, action)=> {
  switch(action.type) {
    case LOAD_CART:
      return {
        ...state,
        ...action.payload
      }
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload],
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item.id!=action.payload.id)
      }
    case UPDATE_ITEM:
      return {
        ...state,
        items: state.items.map(item => {
          if(item.id==action.payload.id)
            return {...action.payload}
          return item
        })
      }
    case BOOK_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case UPDATE_TOTAL_PRICE:
      let sum = 0
      state.items.forEach(item => {
        sum = sum + item.total
      })
      return {
        ...state,
        total_price: sum
      }
    case CART_EMPTY:
    case BOOK_SUCCESS:
      return initialState
    default:
      return state
  }
}

export default cartReducer