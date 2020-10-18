import {ADD_TO_CART, REMOVE_FROM_CART, BOOK_SUCCESS, BOOK_ERROR, UPDATE_TOTAL_PRICE, UPDATE_ITEM, LOAD_CART, CART_EMPTY} from '../actions/constants'
import AsyncStorage from '@react-native-community/async-storage'

export const loadCart =()=>async(dispatch)=> {
  try {
    const stored = await AsyncStorage.getItem('cart')
    if(stored !== null) {
      dispatch({
        type: LOAD_CART,
        payload: JSON.parse(stored)
      })
    }
    else {
      dispatch({
        type: CART_EMPTY,
        payload: 'Cart is empty'
      })
    }
  } catch(e) {
    dispatch({
      type: CART_EMPTY,
      payload: 'Cart is empty'
    })
  }
}

export const addToCart = (product, count)=>async(dispatch)=> {
  try {
    let item = {
      ...product,
      count,
      total: product.price*count
    }

    if(count === 1) {
      dispatch({
        type: ADD_TO_CART,
        payload: item
      })
    } else {
      dispatch({
        type: UPDATE_ITEM,
        payload: item
      })
    }

    dispatch({
      type: UPDATE_TOTAL_PRICE,
      payload: null
    })
  } catch (e) {
    
  }
}

export const removeFromCart = (product, count)=>async(dispatch)=> {
  try {
    if(count == 0)
      dispatch({
        type: REMOVE_FROM_CART,
        payload: {
          id: product.id
        }
      })
      else {
        let modifiedItem = {
          ...product,
          count,
          total: product.price*count
        }
    
        dispatch({
          type: UPDATE_ITEM,
          payload: modifiedItem
        })
      }

      dispatch({
        type: UPDATE_TOTAL_PRICE,
        payload: null
      })
  } catch (e) {
    
  }
}

export const book_order = ()=>async(dispatch)=> {
  try {
    dispatch({
      type: BOOK_SUCCESS,
      payload: null
    })
  } catch (e) {
    dispatch({
      type: BOOK_ERROR,
      payload: "Could not book order. Try again"
    })
  }
}