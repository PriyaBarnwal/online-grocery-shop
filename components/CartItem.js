import React from 'react'
import {Text, View, Image} from 'react-native'
import {Button} from 'native-base'
import styles from '../styles/CardItem.styl'
import ButtonGroup from './ButtonGroup'

const CartItem =({item, addToCart, removeFromCart})=> {
  let {count, total, price} = item
  return (
    <>
      <View style={styles.card}>
        <View style={styles.cardleft}>
          <Image source={{uri:item.filename}} style={styles.img}/>
        </View>
        <View style={styles.cardright}>
          <Text style={styles.title}>{item.title}({item.qty})</Text>
          <Text style={styles.meta}>{price} * {count}</Text>
          <Text style={styles.meta}>Price: Rs. {total}</Text>
          <View style={styles.cartwidget}>
            <ButtonGroup count={count} increment={()=>addToCart(item, count+1)} decrement={()=>removeFromCart(item, count-1)}/>
          </View>
        </View>
        </View>
    </>
  )
}

export default CartItem