import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TextBase, Pressable, TouchableHighlight, SafeAreaView, ScrollView, TextInput, Flatlist } from 'react-native';
import {useEffect, useState} from 'react'

const Itineraries = (props) => {
    const cityId = props.route.params.idCity
    const [itineraries, setItineraries] = useState([])
    const [visible, setVisible] = useState(!visible)
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
            <View style={styles.contenedorPadre}>
            <View style={styles.contenedorItinerario}>
                <Text style={styles.tituloItinerario}>{itinerary.title}</Text>
                <Text style={styles.autor}>{itinerary.userName}</Text>
                <View style={styles.contenedorDatos}>
                    <View ><Text style={styles.texto}>4 Likes</Text></  View>
                    <View ><Text style={styles.texto}>Duration: {itinerary.duration}hs</    Text></View >
                    <View ><Text style={styles.texto}>{Array(itinerary.price).fill('$')}</Text></  View>
                </View>
                <View style={styles.hashtagContenedor}>
                    {itinerary.hashtags.map(hashtag => (<Text style={styles.hashtag}>{hashtag}</Text>))}
                </View>
                <TouchableHighlight onPress={() => {setVisible(!visible)}}>
                    {!visible ?
                    <View style={styles.contenedorVisible}>
                        <Text style={styles.visible}>View More</Text>
                    </View>  : <View>
                        <View style={styles.actividades}> 
                            <View style={styles.actividadContenedor}>
                                <Image style={styles.imgActividad}/>
                                <Text style={styles.actividadTitulo}>Titulo     Actividad</Text>
                            </View>
                        </View>
                        <View style={styles.contenedorVisible}>
                            <Text style={styles.visible}>View Less</Text>
                        </View>
                    </View>}
                </TouchableHighlight>
            </View>
        </View>
        
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
const styles ={
    contenedorPadre:{
        flex:1,
        alignItems:'center'
    },
    contenedorItinerario:{
        flex:1,
        backgroundColor:'#050A1A',
        marginTop: '3%',
        marginBottom: '3%',
        alignItems:'center',
        width: '90%',
        borderRadius: 20,
        paddingTop: '3%',
        paddingBottom: '3%',
    },
    tituloItinerario:{
        fontSize: 30,
        color: 'white',
    },
    texto:{
        color:'white',
        fontSize: 20,
    },
    contenedorDatos:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width:'100%'
    },
    hashtagContenedor:{
        alignItems:'center'
    },
    hashtag:{
        color:'white',
        fontSize: 18,
        paddingVertical: '5%'
    },
    visible:{
        color:'white',
        width:150,
        textAlign:'center',
        borderRadius:20,
        backgroundColor: '#0072FF',
        paddingVertical: 10,
        paddingHorizontal: 30,

    },
    actividades:{
        alignItems:'center',
    },
    actividadContenedor:{
        display:'flex',
        flex:1,
        alignItems:'center',
        width: '90%',
        backgroundColor:'red',
        margin: 20,
    },
    imgActividad:{
        flex:1,
        height: 200,
        backgroundColor: 'red'
    },
    actividadTitulo:{
        color:'white',
        textAlign:'center',
        fontSize: 16,
    },
    contenedorVisible:{
        flex:1
    },
    autor:{
        color:'white',
        paddingVertical: 5,
    }

}
export default Itineraries