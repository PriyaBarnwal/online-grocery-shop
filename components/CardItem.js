import React from 'react'
import {Text, View, Image} from 'react-native'
import {Button} from 'native-base'
import styles from '../styles/CardItem.styl'
import * as Animatable from 'react-native-animatable'
import ButtonGroup from './ButtonGroup'

const CardItem =({item, index, count, addToCart, removeFromCart,})=> {
  return (
    <>
    <Animatable.View
      animation="fadeIn"
      duration={1000}
      delay={index ? (index * 1000)/5 : 0}
      useNativeDriver
    >
      <View style={styles.card}>
        <View style={styles.cardleft}>
          <Image source={{uri:item.filename}} style={styles.img}/>
        </View>
        <View style={styles.cardright}>
          <Text style={styles.title}>{item.title.toUpperCase()}</Text>
          {item.brand && <Text style={styles.brand}>{item.brand.toUpperCase()}</Text>}
          <Text style={styles.meta}>{item.qty}</Text>
          <Text style={styles.meta}>Price: Rs. {item.price}</Text>
          <View style={styles.cartwidget}>{count? (<ButtonGroup count={count} increment={()=>addToCart(item, count+1)} decrement={()=>removeFromCart(item, count-1)}/>):
          <Button style={styles.addbtn} info rounded onPress={()=>addToCart(item, 1)}><Text style={styles.addtext}>ADD</Text></Button>}</View>
        </View>
        </View>
    </Animatable.View>
    </>
  )
}

export default CardItem