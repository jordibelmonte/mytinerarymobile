import { StyleSheet, Text, View, Image, ImageBackground, Button, TextBase, Pressable, TouchableHighlight, SafeAreaView, ScrollView, TextInput, FlatList} from 'react-native'
import {useState, useEffect} from 'react'
import SelectPicker from 'react-native-form-select-picker'
import React from 'react'
const SignUp = () =>{
    const [countries, setCountries] = useState([])
     const [errors, setErrors] = useState([])
     const fetchearCountries = async () => {
         const APIcall = await fetch('https://restcountries.eu/rest/v2/all');
         const responseCountries = await APIcall.json();
         setCountries(responseCountries)
     }
     // Configure the useEffect
     useEffect(() => {
         fetchearCountries();
     }, [])
     const [newUser, setNewUser] = useState({})
     const readInput = e => {
         /* capturo valor del input */
         const value = e.target.value
         /* capturo nombre del campo del que recibo el valor del input */
         const name = e.target.name
         /* seteo el nuevo usuario */
         setNewUser({
             /* uso el spread operator para no sobre escribir el state */
             ...newUser,
             /* creo un objeto que va a tener el nombre y el valor */
             [name]: value
         })
     }    

    return(
        <>
        <View style={styles.container}>
            <SelectPicker default='Choose a country' label='country' placeholder='Choose a Country' onValueChange={(country) => setNewUser({...newUser, country})}>
                {countries.map((country, index) => {
                    return (
                        <SelectPicker.Item label={country.name} value={country.name} key={country.name}>{country.name}</SelectPicker.Item>
                    )
                    })}
            </SelectPicker>
        </View>
            
        </>
    
        )
} 
const styles = {
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center'
    }
}
export default SignUp