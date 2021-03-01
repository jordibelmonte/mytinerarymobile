import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TextBase, Pressable, TouchableHighlight, SafeAreaView, ScrollView, TextInput, Flatlist } from 'react-native';
import {useEffect, useState} from 'react'
import Itinerary from './Itinerary'


const Itineraries = (props) => {
    const cityId = props.route.params.idCity
    const [itineraries, setItineraries] = useState([])
    
    useEffect(()=>{
        fetch('https://mytinenarymobile.herokuapp.com/api/itineraries/'+cityId)
        .then(response => response.json())
        .then(data => setItineraries(data.response))
    },[])
     if (itineraries.length === 0){
        var views = (
            <View style={styles.imageBackground}>
                <Text style={styles.textBackground}>No Itineraries Yet</Text>
            </View> 
        )
    } else {
        var views = (    
        <ScrollView>
            {itineraries.map(itinerary => (                                    
                <Itinerary key={itinerary.title} props={itinerary}/>
             ))}
            </ScrollView> 
        )
    }
    
    return(
    <>
    {views}

    </>)
}
const styles= StyleSheet.create({
    imageBackground:{
        flex:1,
        height:'100%',
        width:'100%',
        backgroundColor:'#0072FF',
        alignItems:'center',
        justifyContent:'center',       
    },
    textBackground:{
        color:'white',
        fontSize: 30,
        fontWeight: 'bold',
    }
})

export default Itineraries