import {LOGIN_SUCCESS, AUTH_SUCCESS, AUTH_FAILURE} from '../actions/constants'

let initialState = {
  isLoading: true,
  user: null,
  error: null
}

const authReducer = (state=initialState, action) => {
  switch(action.type){
    case AUTH_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        error: null
      }
    case AUTH_FAILURE:
      return {
        ...state,
        user: null,
        isLoading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default authReducer