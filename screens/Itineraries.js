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
    console.log(itineraries)

    return(
    <>
    <ScrollView>
        { itineraries.map(itinerary => (
          <Itinerary key={itinerary.title} props={itinerary}/>
        
    ))}
    
    </ScrollView>

  {/*       {itineraries.length === 0 ? <Text>Oooops! Sorry, no itineraries yes</Text> : 
        itineraries.map(itinerary =>{
            <View>
                <Text>{itinerary.title}</Text>
                <Text>{itinerary.userName}</Text>
                <Text>{itinerary.likes.map(like => {
                    {like.length === 0 ? <Text>Be the first like</Text>: <Text>`{like.lenght} likes`</Text>}
                })}</Text>
            </View>

        })
         } */}
        

    </>)
}


export default Itineraries