import { NavigationContainer } from '@react-navigation/native'
import React from 'react';
import Navigator from './Navigator'
import Home from './screens/Home'
import Cities from './screens/Cities'
import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler'
import {createStackNavigator} from '@react-navigation/stack'
import {connect} from 'react-redux'
const Stack = createStackNavigator();
const Navigator= () => {
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Cities" component={Cities} />
          </Stack.Navigator>        
        </NavigationContainer>
    )
}
const mapStateToProps = state =>{
    return {
  /*     loggedUser : state.authR.loggedUser */
    }
  }
  const mapDispatchToProps = {
  /*   logInFromLS: authActions.logInFromLS, */
    
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Navigator);