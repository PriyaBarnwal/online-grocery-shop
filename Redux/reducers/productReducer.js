import {GET_ALLPRODUCTS} from '../actions/constants'

let initialState = {
  error: null,
  loading: true
}

const recipeReducer = (state = initialState, action) => {
  let {type, payload} = action

  switch(type) {
    case GET_ALLPRODUCTS:
      return {
        ...state,
        ...payload,
        error: null,
        loading: false
      }
    default:
      return state
  }
}

export default recipeReducer