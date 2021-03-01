import axios from 'axios'
import { View, StyleSheet, Button, Alert } from "react-native";

const authAction = {
    newUser: (newUser) => {
      console.log('llegué a la action')
        return async (dispatch, getState) =>{
           try{
               const response = await axios.post("https://mytinenarymobile.herokuapp.com/api/user/signup",newUser)
              console.log(response)
               if (!response.data.success){
               return response.data
           }
           dispatch({type: 'NEW_USER', payload: response.data})
       }catch(err){
        console.log(err)
       }
    } 
    }, 
    logOut: () => {
        
        return (dispatch, getState) => {
            dispatch({type: 'LOG_OUT'})
        }           
    
        
    },
    logInFromLS: (token) => {
        return async (dispatch, getState) => {
          try{
            const response = await axios.post('https://mytinenarymobile.herokuapp.com/api/login/ls', {token}, {
              headers: {
                Authorization: `Bearer ${token}`
              }
            })
            dispatch({type: 'LOG_IN', payload: {response: {...response.data.response}}})
            console.log(response)
          }catch(err){
            if(err.response.status === 401) {
              return true
            }
          }
        }
      },
    logIn : (logUser) => {
        return async(dispatch, getState) => {
            const response = await axios.post("https://mytinenarymobile.herokuapp.com/api/user/signin", logUser)
            if (!response.data.success){
                return response.data
            }
            dispatch({type: 'LOG_IN', payload: response.data})
        }

    }
}

export default authAction