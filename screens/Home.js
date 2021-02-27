import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TextBase, Pressable, TouchableHighlight, SafeAreaView, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { color } from 'react-native-reanimated';
import MyCarousel from './Carousel'
import Cities from './Cities'
import styles from './styles'

const Home = ({navigation}) => {
    return(
        <ScrollView style={styles.safeArea} onRefresh={() =>{}}>
          <View style={styles.container}>
            <ImageBackground style={styles.main} source={require('../assets/banner-santorini.jpg')}>
            <View style={styles.logoContainer}>
              <Image style={styles.logo}resizeMode="contain" source={require('../assets/logo.png')}></Image>
            </View>
            <View stlye={styles.backGroundMain}>
              <View style={styles.smallContainer}>
                <Text style={styles.texto}>Be part of a New Adventure </Text>
                <Text style={styles.texto}>Travel the world</Text>
                <TouchableHighlight style={styles.buttonContainer}
                activeOpacity={0.6}
                underlayColor="#FFFFFF"
                onPress={ () => navigation.navigate('Cities')
                }>
                <Text style={styles.button}>Find Cities</Text>
            </TouchableHighlight>
              </View>
            </View>
            </ImageBackground>
          </View>
          <View style={styles.division}>
              <Text style={styles.divisionText}>Popular MyTineraries</Text>
            </View>
          <MyCarousel/>
        </ScrollView>
    )
} 
export default Home 
