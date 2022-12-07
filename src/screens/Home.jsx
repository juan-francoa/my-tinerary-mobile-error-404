import { StyleSheet, View, Text, Image, ImageBackground, Button, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import Carrousel from '../components/Carrousel';

export default function Home() {
  return (
    <ImageBackground style={styles.img} source={require('../../public/img/imagenes/fondo1.png')} >
      <Text style={styles.text}>Home</Text>
      <Carrousel />
      <StatusBar style="auto" />
    </ImageBackground>



  )
}

const styles = StyleSheet.create({
  img: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    fontSize: 42,
    textAlign: "center"
  },
  container: {
    flex: 1
  },

});
