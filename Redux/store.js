import { createStore, applyMiddleware } from 'redux'
import {composeWithDevTools} from 'remote-redux-devtools';
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'
import AsyncStorage from '@react-native-community/async-storage'

let initialState = {},
  middlewares = [thunk]

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)))

let currentState = store.getState()

store.subscribe(async() => {
  let prevState = currentState
  currentState = store.getState()

  if (prevState.cart !== currentState.cart) {
    try {
      await AsyncStorage.setItem('cart', JSON.stringify(currentState.cart))
    }
    catch(e) {
    }
  }
})

export default store