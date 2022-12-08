import { StyleSheet, View, Text, Image, ImageBackground, Button, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import Carrousel from '../components/Carrousel';

export default function Home(props) {
  return (
    <ImageBackground style={styles.img} source={require('../../public/img/imagenes/fondo1.png')} >
      <Image style={styles.logo} source={require("../../public/img/imagenes/logo2.png")} />
      <Carrousel props={props} />
      <StatusBar style="auto"/>
    </ImageBackground>



  )
}

const styles = StyleSheet.create({
  img: {
    flex: 1,
    justifyContent: "center"
  },
  container: {
    flex: 1
  },
  logo:{
    height:50,
    width:200
  }
});
