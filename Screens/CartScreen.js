import React from 'react'
import {Text, View, ScrollView, FlatList, Image, Dimensions, Alert} from 'react-native'
import {Header, Title, List, ListItem, Button} from 'native-base'
import {connect} from 'react-redux'
import {addToCart, removeFromCart, book_order} from '../Redux/actions/cartActions'
import CartItem from '../components/CartItem'

import styles from '../styles/CartScreen.styl'

const CartScreen =({navigation, cart, addToCart, removeFromCart, book_order})=> {
  let {items, total_price} = cart

  let renderItem = ({ item, index }) => {
    return <CartItem item={item} addToCart={addToCart} removeFromCart={removeFromCart}/>
  }

  let bookOrder =() => {
    book_order()

    Alert.alert("Order status", "Yes. Order Placed Successfully!")
  }

  return (
    <ScrollView>
      <Header style={styles.header}>
        <Title>My Shopping Cart ({items.length})</Title>
      </Header>
    {items.length>0 
    ?(<View>
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      <View style={styles.card}>
        <List>
          <ListItem style={styles.listItem}>
            <Text>Cart Total</Text>
            <Text style={styles.amt}>Rs. {total_price}</Text>
          </ListItem>
          <ListItem style={styles.listItem}>
            <Text>Delivery charges</Text>
            <Text style={styles.amt}>+ Rs. 50</Text>
          </ListItem>
          <ListItem style={styles.listItem}>
            <Text>Discount</Text>
            <Text style={styles.amt}>- Rs. 100</Text>
          </ListItem>
          <ListItem style={styles.listItem}>
            <Text>Final Amount</Text>
            <Text style={{...styles.amt, ...styles.finalAmt}}>Rs. {total_price+50-100}</Text>
          </ListItem>
        </List>
        <Button info block onPress={()=>bookOrder()} style={styles.buybutton}>
          <Text style={styles.buttontext}>Proceed to Buy</Text>
        </Button>
      </View>
      </View>): 
      (<View style={{...styles.empty, height: Dimensions.get('screen').height}}>
        <Image source={require('../assets/empty.png')}/>
        <Button info onPress={()=>navigation.navigate('Main')} style={styles.browsebutton}>
          <Text style={styles.buttontext}>Browse</Text>
        </Button>
      </View>)}
    </ScrollView>
  )
}

const mapStateToProps =(state)=>({
  cart: state.cart
})

export default connect(mapStateToProps, {addToCart, removeFromCart, book_order})(CartScreen)