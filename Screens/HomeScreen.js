import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import MainScreen from './MainScreen'
import OrderScreen from './OrderScreen'
import EventScreen from './EventScreen'
import CartScreen from './CartScreen'
import ProductScreen from './ProductScreen'
import {getAllProducts} from '../Redux/actions/productActions'

const Tab = createMaterialBottomTabNavigator()
const MainStack = createStackNavigator()

const WelcomeScreen =() => {
  return (
    <MainStack.Navigator 
      screenOptions={{
        headerStyle: {
          backgroundColor: '#05375a'
        },  
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }}>
      <MainStack.Screen name="Main" component={MainScreen} options={{headerShown: false}}/>
      <MainStack.Screen name="Product" component={ProductScreen} options={({ route }) => ({ title: route.params.category })}/>
    </MainStack.Navigator>
  )
}

const HomeScreen =({getAllProducts, cart})=> {
  useEffect(()=> {
    getAllProducts()
  },[getAllProducts])

  return (
      <Tab.Navigator 
        initialRouteName="Main"
        labeled={false}
        barStyle={{ backgroundColor: '#05375a' }}
      >
        <Tab.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={{
            tabBarIcon: ({ focused, color }) => (
              <MaterialCommunityIcons name={focused? 'home': 'home-outline'} color={color} size={26} />
            )}}/>
        <Tab.Screen 
          name="Events" 
          component={EventScreen} 
          options={{
            tabBarIcon: ({ focused, color }) => (
              <MaterialCommunityIcons name={focused? 'script': 'script-outline'} color={color} size={26} />
            ),
            headerShown: false}}/>
        <Tab.Screen 
          name="Orders" 
          component={OrderScreen} 
          options={{
            tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons name={focused? 'shopping': 'shopping-outline'}color={color} size={26} />
          )}}/>
        <Tab.Screen 
          name="Cart" 
          component={CartScreen} 
          options={{
            tabBarBadge: cart?.items?.length,
            tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons name={focused? 'cart': 'cart-outline'}color={color} size={26} />
          )}}/>
      </Tab.Navigator>
)
}

const mapStateToProps=(state)=>({
  cart: state.cart
})

export default connect(mapStateToProps, {getAllProducts})(HomeScreen)