import React, { useState } from 'react'
import {
  View,
  Text,
  StatusBar,
  KeyboardAvoidingView,
  Platform
} from 'react-native'
import {connect} from 'react-redux'
import {Button, Item, Input, Icon} from 'native-base'
import * as Animatable from 'react-native-animatable'
import {login} from '../Redux/actions/authActions'

import styles from '../styles/Login.styl'

const LoginScreen = ({navigation, auth, login}) => {
  let [mobile, setMobile] = useState('')
  let [successstate, setsuccessstate] = useState(false)
  let [errorstate, seterrorstate] = useState(false)

  let onInputChange =(text)=> {
    setMobile(text)
    if(text.match(/^\d{10}$/)) {
      setsuccessstate(true)
      seterrorstate(false)
    }
    else {
      seterrorstate(true)
      setsuccessstate(false)
    }
  }

  let submit =() => {
    login(mobile)
  }

  return (
    <>
    {!auth.loading && auth.user
    && navigation.navigate('Home')}
      <StatusBar barStyle="light-content"/>
      {!auth.loading && !auth.user &&
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.flexOne}
      >
        <View style={styles.header}>
          <Animatable.Image 
            animation="bounceIn"
            duration={1500}
            source={require('../assets/logo2.jpg')} style={styles.logo}/>
        </View>
        <Animatable.View animation="fadeInUpBig" duration={1500} style={styles.formContainer}>
          <Text style={styles.tagline}>Happy Shopping!!</Text>
          <View>
          <Item underline success={successstate} error={errorstate}>
            <Icon active name='call'/>
            <Input placeholder='Enter Mobile Number' keyboardType="numeric" defaultValue={mobile} onChangeText={onInputChange}/>
          </Item>
          {errorstate && <Text style={{fontSize:12, color:'red'}}>Please enter a valid mobile number</Text>}
          </View>
          <Button info block onPress={submit} disabled={!successstate}>
            <Text>Sign in</Text>
          </Button>
        </Animatable.View>
      </KeyboardAvoidingView>}
    </>
  )
}

const mapStateToProps = (state)=> ({
  auth: state.auth
})

export default connect(mapStateToProps, {login})(LoginScreen)
