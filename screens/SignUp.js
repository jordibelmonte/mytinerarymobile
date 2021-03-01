import { StyleSheet, Text, View, Image, ImageBackground, Button, TextBase, Pressable, TouchableHighlight, SafeAreaView, ScrollView, TextInput, FlatList, ToastAndroid, Alert} from 'react-native'
import {useState, useEffect} from 'react'
import SelectPicker from 'react-native-form-select-picker'
import React from 'react'
import styles from './styles'
import {connect} from 'react-redux'
import authAction from '../redux/actions/authAction'
import { NavigationContainer } from '@react-navigation/native';

const SignUp = (props) =>{
    const [countries, setCountries] = useState([])
    const [newUser, setNewUser] = useState({})
    const [errors, setErrors] = useState([])
    const inputSignUp = (name, value) => {
      setNewUser({
            ...newUser,
            [name]: value
        })
    }
     
     const fetchearCountries = async () => {
         const APIcall = await fetch('https://restcountries.eu/rest/v2/all');
         const responseCountries = await APIcall.json();
         setCountries(responseCountries)
     }
     // Configure the useEffect
     useEffect(() => {
         fetchearCountries();
     }, [])
     
     const validate = async () =>{
        if (newUser.userName === '' || newUser.email === '' || newUser.password === '' || newUser.name === '' || newUser.lastName === '' || newUser.country === ''){
            return false
        }
        const response = await props.newUser(newUser)
        if (response && !response.success){
            setErrors(response.errors)
            errors.map(error => Alert.alert(error))
        } else {
            Alert.alert("User Created!")
        }}
    return(
        <>
        <ScrollView>
        <View style={styles.containerSignUp}>
        <View style={styles.logoContainer}>
              <Image style={styles.logo}resizeMode="contain" source={require('../assets/logo.png')}></Image>
        </View>
            <View style={styles.containerInput}>
                <TextInput style={styles.countriesSelect} placeholder='First Name' onChangeText={(value) => inputSignUp('userName', value)}/>
                <TextInput style={styles.countriesSelect} placeholder='Last Name' onChangeText={(value) => inputSignUp('lastName', value)}/>
                <TextInput style={styles.countriesSelect} placeholder='Email' onChangeText={(value) => inputSignUp('email', value)}/>
                <TextInput style={styles.countriesSelect} secureTextEntry={true} placeholder='Password' onChangeText={(value) => inputSignUp('password', value)}/>
                <SelectPicker style={styles.countriesSelect} default='Choose a country' label='country' placeholder='Choose your Country' onValueChange={(country) => setNewUser({...newUser, country})}>
                {countries.map((country, index) => {
                    return (
                        <SelectPicker.Item label={country.name} value={country.name} key={country.name}>{country.name}</SelectPicker.Item>
                    )
                    })}
            </SelectPicker>
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
    newUser: authAction.newUser
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)