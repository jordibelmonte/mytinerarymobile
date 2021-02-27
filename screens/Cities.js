import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TextBase, Pressable, TouchableHighlight, SafeAreaView, ScrollView, TextInput } from 'react-native';
import {useEffect, useState} from 'react'
import styles from './styles'

const ENTRIES1 = [
  {
    title: 'Beautiful and dramatic Antelope Canyon',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/UYiroysl.jpg',
  },
  {
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
  {
    title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://i.imgur.com/MABUbpDl.jpg',
  },
  {
    title: 'Acrocorinth, Greece',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
  },
  {
    title: 'The lone tree, majestic landscape of New Zealand',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
  },
];

const Cities = () => {
/*      useEffect(()=>{
        getCities()  
  
      }, [])
      const getCities= async () =>{
        const response = await fetch("http://localhost:4000/api/cities")
        const data = await response.json()
        console.log(data)
      }   */
      return(
          <>
            <View style={styles.cajaPadre}>
                {ENTRIES1.map(city =>{
                  <View>
                    <ImageBackground source={{uri: 'https://i.imgur.com/2nCt3Sbl.jpg'}}>
                      <Text>Inside</Text>
                    </ImageBackground>
                  </View>
                } )}
            </View>
          </>
      )
  }
  const styles = StyleSheet.create(
    {
      styles:{}
    }
  ) 

export default Cities