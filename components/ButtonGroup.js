import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import styles from '../styles/ButtonGroup.styl'

const ButtonGroup =({count, increment, decrement})=> {
  return(
    <View style={styles.buttonGroup}>
      <TouchableOpacity onPress={decrement}><Text style={styles.buttongrp_text}>-</Text></TouchableOpacity>
      <View style={styles.count}><Text >{count}</Text></View>
      <TouchableOpacity onPress={increment}><Text style={styles.buttongrp_text}>+</Text></TouchableOpacity>
    </View>
  )
}

export default ButtonGroup