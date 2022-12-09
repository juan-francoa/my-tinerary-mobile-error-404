import React from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, TextInput, Button } from 'react-native'
import axios from 'axios'

export default function SignUp() {
    const backgroundImage = { uri: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/501000/501690-barceloneta-beach.jpg' }
    let name = React.useRef()
    let lastName = React.useRef()
    let age = React.useRef()
    let photo = React.useRef()
    let email = React.useRef()
    let password = React.useRef()
    let signup = React.useRef()

     function registration(register) {
        register.preventDefault()
        console.log(register)
        let registrationdata = {
            name: name.current.value,
            lastName: lastName.current.value,
            age: age.current.value,
            photo: photo.current.value,
            email: email.current.value,
            password: password.current.value,
        }
         axios.post(`https://back-error-404.up.railway.app/auth/sign-up`, registrationdata)
            .then(res => alert(res.data.response))
            .catch(error => alert(error))
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontWeight: 'bold', paddingVertical: '2%', paddingHorizontal: '6%', margin: '5%', fontSize: 24 }}>Sign Up</Text>
            <View onSubmit={registration} ref={signup} >
                <View style={styles.viewInput}>
                    <TextInput
                        style={styles.inputText}
                        value={name}
                        ref={name}
                        label='name'
                        placeholder='Name' />
                </View>
                <View style={styles.viewInput}>
                    <TextInput
                        style={styles.inputText}
                        value={lastName}
                        ref={lastName}
                        label='lastName'
                        placeholder='lastName' />
                </View>
                <View style={styles.viewInput}>
                    <TextInput
                        style={styles.inputText}
                        value={age}
                        ref={age}
                        label='age'
                        placeholder='age'
                        keyboardType='numeric' />
                </View>
                <View style={styles.viewInput}>
                    <TextInput
                        style={styles.inputText}
                        value={photo}
                        ref={photo}
                        label='photo'
                        placeholder='photo'
                        keyboardType='url' />
                </View>
                <View style={styles.viewInput}>
                    <TextInput
                        style={styles.inputText}
                        value={email}
                        ref={email}
                        label='email'
                        placeholder='email'
                        keyboardType='email-address' />
                </View>
                <View style={styles.viewInput}>
                    <TextInput
                        style={styles.inputText}
                        value={password}
                        ref={password}
                        label='password'
                        placeholder='password' />
                </View>
            </View>
            <Button title='Send' onPress={registration} style={{ color: "#d3d3d3", padding: '5%' }} />
        </View>
    );
}



const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        fontSize: 28,
        fontWeight: "bold",
        marginTop: 50,
        marginBottom: 15,
        color: "white"
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        bacolor: "white",
        borderColor: "white",
        backgroundColor: "white"
    },
    error: {
        textAlign: "center",
        color: "#f00",
        marginTop: 20,
        color: "white"
    },
    viewInput:{
        cheight: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        bacolor: "white",
        borderColor: "white",
        backgroundColor: "white"
    },
    inputText:{
        color: "black",
    },
    container:{
        alignItems: "center",
    }
})

