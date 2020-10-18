import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {Provider} from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Screens/LoginScreen'
import HomeScreen from './Screens/HomeScreen'
import store from './Redux/store'
import {checkAuth} from './Redux/actions/authActions'
import {loadCart} from './Redux/actions/cartActions'

const Stack = createStackNavigator()

const App = () => {
  useEffect(()=> {
    async function checkauth() { 
    await store.dispatch(checkAuth())
    await store.dispatch(loadCart())
  }
  checkauth()
  }, [])

  return (
    <>
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    </>
  )
}

export default App;
