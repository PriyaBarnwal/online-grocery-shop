import React from 'react'
import {Text, View, Dimensions, FlatList, Image, TouchableOpacity} from 'react-native'
import * as Animatable from 'react-native-animatable'
import styles from '../styles/Main.styl'
import fruits from '../assets/fruits.jpg'
import vegetables from '../assets/vegetables.jpg'
import staples from '../assets/staples.jpg'
import dairy from '../assets/dairy.jpg'


const MainScreen =({navigation})=> {
  let categories=[
    {id:'dairy', img: dairy},
    {id:'fruits', img: fruits},
    {id:'vegetables', img: vegetables},
    {id:'staples', img: staples}],
    width = Dimensions.get('window').width

  let renderItem=({item})=> {
    return(
      <TouchableOpacity onPress={()=>navigation.navigate('Product', {category: item.id})} style={{width: width/2, ...styles.categoryCard}}>
        <Image source={item.img} style={{height: 150, width: width/2 - 20}} resizeMode="cover"/>
        <Text style={styles.categorytext}>{item.id.toUpperCase()}</Text>
      </TouchableOpacity>
    )
  }
  return (
    <>
      <View style={styles.banner}>
        <Animatable.Image 
          animation="bounceIn"
          duration={1500}
          source={require('../assets/bg1.jpg')}
          style={{width, height: Dimensions.get('window').height/3}}
        />
      </View>
      <View style={styles.categories}>
        <Text style={styles.title}>POPULAR CATEGORIES</Text>
        <FlatList numColumns={2} styles={{flex: 1}} data={categories} renderItem={renderItem} keyExtractor={(item,index) => item}/>
      </View>
    </>
  )
}

export default MainScreen