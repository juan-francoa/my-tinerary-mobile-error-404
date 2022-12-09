import React from 'react'
import { View, Text, ImageBackground, StyleSheet} from 'react-native'
import LoginForm from '../components/Auth/LoginForm'
import SignUp from '../components/Auth/SingUp'


export default function Account() {
  const auth = null;

  return (
    <ImageBackground style={styles.img} source={require('../../public/img/imagenes/fondo6.jpg')} >
    <View>
      <SignUp/>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  img: {
    flex: 1,
    justifyContent: "center"
  }
});