import React from 'react'
import {View, FlatList} from 'react-native'
import CardItem from '../components/CardItem'
import {connect} from 'react-redux'
import {addToCart, removeFromCart} from '../Redux/actions/cartActions'

const ProductScreen =({navigation, route, addToCart, removeFromCart, products, cart})=> {
  let _products = products[route.params.category]

  let renderItem = ({ item, index }) => {
    let count = cart.items.filter(prod=>prod.id ===item.id)[0]?.count
    return <CardItem item={item} index={index} addToCart={addToCart} removeFromCart={removeFromCart} count={count}/>
  }
  return <View>
    <FlatList
      data={_products}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  </View>
}

const mapStateToProps=(state)=>({
  products: state.products,
  cart: state.cart
})

export default connect(mapStateToProps, {addToCart, removeFromCart})(ProductScreen)