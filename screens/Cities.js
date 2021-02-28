import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TextBase, Pressable, TouchableHighlight, SafeAreaView, ScrollView, TextInput, Flatlist } from 'react-native';
import {useEffect, useState} from 'react'
import Itineraries from './Itineraries'

const Cities = (props) => {
    const [cities, setCities] = useState([])
     useEffect(()=>{
        fetch("https://mytinenarymobile.herokuapp.com/api/cities")
        .then(response => response.json())
        .then(data => setCities(data.response))
      }, [])
      

      const imgFind ={uri : 'http://3.bp.blogspot.com/-jfidBPY7iek/Vtv2IlJVfkI/AAAAAAAArME/nqkMdJF6HkE/s1600/vintage-travel-wallpaper.jpg'}

      return(
          <>
            <ScrollView>
              <View style={styles.header} >
                <ImageBackground style={styles.headerImg} source={imgFind}>
                  <View style={styles.textContainer}>
                    <Text style={styles.headerText}>Find Your Favorites Cities</Text>
                  </View>                  
                </ImageBackground>
              </View>

              <View style={styles.cajaPadre}>
                
                  {cities.map(city =>(
                  <TouchableHighlight key={city.cityName} onPress={()=> props.navigation.navigate("Itineraries",{idCity: city._id, cityImg: city.cityImg, cityName: city.cityName})} >
                    <View style={styles.padreCities}>
                      <Image style={styles.cities} source={{uri: city.cityImg}}/> 
                      <Text style={styles.text}>{city.cityName}</Text>
                    </View>
                  </TouchableHighlight>
                  
                ))}
              </View>
            </ScrollView> 
          </>
      )
  }
  const styles = StyleSheet.create(
    { 
     cajaPadre:{
       flex:1,
     },
     padreCities:{
      alignItems:'center',
    },
     cities:{
       width:'90%',
       height:300,
       resizeMode:'cover',
       justifyContent:'center',
       alignItems:'center',
       marginTop: '3%',
       marginBottom: '3%', 
       borderRadius: 20,  
       alignSelf:'center'    
     },     
      text:{
        color:'black',
        width:'90%',
        fontSize: 20,
        paddingTop: '1%',
        paddingBottom: '1%',
        paddingLeft:'2%'
      },
      header:{
        height: 200,
      },

      headerImg:{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
      textContainer:{
        height:'100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent:'center'
      },
      headerText:{
        textAlign:'center',
        fontSize: 30,
        color:'white',
        backgroundColor: 'rgba(0,0,0,0.7)',
        margin: '1%',
        padding: '1%',
        borderRadius: 100,

      }

    }
  ) 

export default Cities