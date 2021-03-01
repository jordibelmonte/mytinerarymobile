import { StyleSheet, Text, View, Image, ImageBackground, Button, TextBase, Pressable, TouchableHighlight, SafeAreaView, ScrollView, TextInput, FlatList} from 'react-native'
import {useState, useEffect} from 'react'
import SelectPicker from 'react-native-form-select-picker'
import React from 'react'
import styles from './styles'
const SignUp = () =>{
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
                <TextInput style={styles.countriesSelect} placeholder='Password' onChangeText={(value) => inputSignUp('password', value)}/>
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
                onPress={ () => {}}>
                <Text style={styles.sendButton}>Send</Text>
            </TouchableHighlight>
            </View>
        </View>
        </ScrollView>
            
        </>
    
        )
} 

export default SignUp