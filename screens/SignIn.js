import { StyleSheet, Text, View, Image, ImageBackground, Button, TextBase, Pressable, TouchableHighlight, SafeAreaView, ScrollView, TextInput, Flatlist, Alert } from 'react-native'
import {useState, useEffect} from 'react'
import React from 'react'
import authAction from '../redux/actions/authAction'
import styles from './styles'
import {connect} from 'react-redux'



const SignIn = (props) =>{
    const [errors, setErrors] = useState([])
    const [logUser, setLogUser] = useState({})
    console.log(props.loggedUser)
    const readInput = (name,value) => {
        setLogUser({
            ...logUser,
            [name]: value
        })
    }
     
     const validate = async () =>{
        if (logUser.userName === '' || logUser.password === ''){
            Alert.alert("All inputs need to be filed")
            return false
        }
        const response = await props.logIn(logUser)
        if (response && !response.success){
            setErrors(response.errors)
            Alert.alert("User Name or Password are incorrect")
        } else {
            /* Alert.alert("Welcome! "+props.loggedUser.name) */
            Alert.alert(
                "Welcome!",
                (props.loggedUser.name),
                [
                  { text: "OK", onPress: () => props.navigation.navigate('Cities') }
                ],
                { cancelable: false }
              )
        }}
    return(
        <>
        <ScrollView>
        <View style={styles.containerSignUp}>
        <View style={styles.logoContainer}>
              <Image style={styles.logo}resizeMode="contain" source={require('../assets/logo.png')}></Image>
        </View>
            <View style={styles.containerInput}>
                <TextInput style={styles.countriesSelect} placeholder='User Email' onChangeText={(value) => readInput('userName', value)}/>
                <TextInput style={styles.countriesSelect} secureTextEntry={true} placeholder='Password' onChangeText={(value) => readInput('password', value)}/>
            <TouchableHighlight style={styles.sendButtonContainer}  
                activeOpacity={0.6}
                underlayColor="#FFFFFF"
                onPress={validate}>
                <Text style={styles.sendButton}>Send</Text>
            </TouchableHighlight>
            <Pressable style={styles.goback} onPress={ () => props.navigation.navigate('Home')
                }>
                <Text style={styles.gobackText}>Go back to Home!</Text>
            </Pressable>
            </View>
        </View>
        </ScrollView>
            
        </>
    
        )
} 
const mapStateToProps = state =>{
    return{
        loggedUser: state.loggedUser
    }
}
const mapDispatchToProps = {
    logIn: authAction.logIn
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn)