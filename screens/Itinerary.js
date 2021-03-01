import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TextBase, Pressable, TouchableHighlight, SafeAreaView, ScrollView, TextInput, Flatlist } from 'react-native';
import {useEffect, useState} from 'react'


const Itinerary = ({props}) =>{
    const [visible, setVisible] = useState(false)
    console.log(props)
 return (
     <>
       <View style={styles.contenedorPadre}>
            <View style={styles.contenedorItinerario}>
                <Text style={styles.tituloItinerario}>{props.title}</Text>
                <Text style={styles.autor}>{props.userName}</Text>
                <View style={styles.contenedorDatos}>
                    <View ><Text style={styles.texto}>4 ❤</Text></  View>
                    <View ><Text style={styles.texto}>Duration: {props.duration}hs</    Text></View >
                    <View ><Text style={styles.texto}>{Array(props.price).fill('💵')}</Text></  View>
                </View>
                <View style={styles.hashtagContenedor}>
                    {props.hashtags.map(hashtag => (<Text style={styles.hashtag}>{hashtag}</Text>))}
                </View>
                <TouchableHighlight onPress={() => {setVisible(!visible)}}>
                    {!visible ?
                    <View style={styles.contenedorVisible}>
                        <Text style={styles.visible}>View More</Text>
                    </View>  : <View>
                        <View style={styles.actividades}> 
                            {props.activities.map(activity => (
                                <View style={styles.actividadContenedor}>
                                    <Image style={styles.imgActividad} source={{uri: activity.activityPic}}/>
                                    <Text style={styles.actividadTitulo}>{activity.activityTitle}</Text>
                                </View>
                            ))}
                        </View>
                        <View style={styles.contenedorVisible}>
                            <Text style={styles.visible}>View Less</Text>
                        </View>
                    </View>}
                </TouchableHighlight>
            </View>
        </View>
     </>
 )
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
        alignItems:'center',
        width: 300,
        backgroundColor:'#0072FF',
        margin: 20,
    },
    imgActividad:{
        width: '100%',
        height: 200,
        resize: 'cover',
    },
    actividadTitulo:{
        color:'white',
        textAlign:'center',
        fontSize: 16,
    },
    contenedorVisible:{
        flex:1,
        alignItems:'center'
    },
    autor:{
        color:'white',
        paddingVertical: 5,
    }
}
export default Itinerary