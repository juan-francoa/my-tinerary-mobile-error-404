import { StyleSheet, View, Text, Image, ImageBackground, Button, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import Carrousel from '../components/Carrousel';

export default function Home(props) {
  return (
    <ImageBackground style={styles.img} source={require('../../public/img/imagenes/fondo1.png')} >
      <Image style={styles.logo} source={require("../../public/img/imagenes/logo2.png")} />
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', textShadow: '3px 2px 4px rgba(0,0,0,0.3)', paddingTop: '10%', paddingButton: '10%'}}>
      Find your perfect trip,
        <Text style={{ color: '#d12929' }}> designed by insiders </Text>
      who know and love their cities!  
      </Text>
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
    display: "flex",
    flexDirection: "column",
  },
  logo:{
    height:50,
    width:200,
  }
});
