import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TextBase, Pressable, TouchableHighlight, SafeAreaView, ScrollView, TextInput, Flatlist, Alert } from 'react-native';
import {useEffect, useState} from 'react'
import Itineraries from './Itineraries'
import {connect} from 'react-redux'

const Cities = (props) => {
    const [cities, setCities] = useState([])
     useEffect(()=>{
        fetch("https://mytinenarymobile.herokuapp.com/api/cities")
        .then(response => response.json())
        .then(data => setCities(data.response))
      }, [])
      

      const imgFind ={uri : 'http://3.bp.blogspot.com/-jfidBPY7iek/Vtv2IlJVfkI/AAAAAAAArME/nqkMdJF6HkE/s1600/vintage-travel-wallpaper.jpg'}
      if (cities.length === 0){
        var views = (
            <View style={styles.imageBackground}>
                <Text style={styles.textBackground}>No Cities Yet</Text>
            </View> 
        )
    } else {
        var views = (    
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
                    city.lenght=== 0 ? 
                    <ImageBackground style={styles.imageBackground} source={{uri:'https://i.pinimg.com/originals/68/d2/22/68d2224b6767ba39ec2b7340deef165c.jpg'}}>
                        <Text style={styles.textBackground}>No Cities Yet</Text>
                    </ImageBackground> 
                    :
                  <TouchableHighlight key={city.cityName} onPress={()=> (props.loggedUser===null ? Alert.alert('You must be logged'): props.navigation.navigate("Itineraries",{idCity: city._id, cityImg: city.cityImg, cityName: city.cityName}))} >
                    <View style={styles.padreCities}>
                      <Image style={styles.cities} source={{uri: city.cityImg}}/> 
                      <Text style={styles.text}>{city.cityName}</Text>
                    </View>
                  </TouchableHighlight>
                  
                ))}
              </View>
            </ScrollView> 
        )
    }
      return(
          <>
           {views} 
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

      },    
      imageBackground:{
        flex:1,
        height:200,
        width:'100%',
        backgroundColor:'#0072FF',
        alignItems:'center',
        justifyContent:'center',
        resizeMode:'cover'        
    },
    textBackground:{
        color:'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    

    }
  ) 
  const mapStateToProps = state =>{
    return{
        loggedUser: state.loggedUser
    }
  }

export default connect(mapStateToProps)(Cities)