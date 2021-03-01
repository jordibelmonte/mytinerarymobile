import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home'
import Cities from './screens/Cities'
import {connect} from 'react-redux'
import {useState} from 'react'
import authAction from './redux/actions/authAction'
import Itineraries from './screens/Itineraries'
import SignUp from './screens/SignUp'
import SignIn from './screens/SignIn'

const Stack = createStackNavigator();

const Navigator =(props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerTitleStyle:{color:'white', fontWeight:'bold'},
        headerStyle:{
          backgroundColor:'#050A1A',
          borderBottomColor:'#0072FF',
          borderStyle:'solid',
          borderBottomWidth: 3,
        },logOut:() =>(
          props.loggedUser && 
          <View>
            <Text>{loggedUser.name}, Log Out</Text>
          </View>
        )
      }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cities" component={Cities} />
        <Stack.Screen name="Itineraries" component={Itineraries} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>        
    </NavigationContainer>
  )
}

const mapStateToProps = state =>{
  return{
    authReducer: state.authReducer
  }
}
const mapDispatchToProps = {
  authAction: authAction.logInFromLS,
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigator)