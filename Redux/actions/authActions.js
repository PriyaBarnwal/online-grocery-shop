import {LOGIN_SUCCESS, AUTH_SUCCESS, AUTH_FAILURE} from './constants'
import AsyncStorage from '@react-native-community/async-storage'

export const login = data => async(dispatch) => {
  try {
    await AsyncStorage.setItem('user', data)

    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        user: data
      }
    })
  } catch (e) {
    dispatch({
      type: AUTH_FAILURE,
      payload: 'Could not login. Try again'
    })
  }
}

export const checkAuth=()=> async(dispatch)=> {
  try {
    const value = await AsyncStorage.getItem('user')
    if(value !== null) {
      dispatch({
        type: AUTH_SUCCESS,
        payload: {
          user: value
        }
      })
    }
    else {
      dispatch({
        type: AUTH_FAILURE,
        payload: 'Not Logged In'
      })
    }
  } catch(e) {
    dispatch({
      type: AUTH_FAILURE,
      payload: 'Not Logged In'
    })
  }
}