import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TextBase, Pressable, TouchableHighlight, SafeAreaView, ScrollView, TextInput } from 'react-native';
import {useEffect, useState} from 'react'
import styles from './styles'


const Cities = ({navigator}) => {
     useEffect(()=>{
        getCities()  
  
      }, [])
      const getCities= async () =>{
        const response = await fetch("http://localhost:4000/api/cities")
        const data = await response.json()
        console.log(data)
      }  
      return(
          <>
  
          </>
      )
  }

export default Cities