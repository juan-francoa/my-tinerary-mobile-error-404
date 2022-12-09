import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    Image
} from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { TextInput } from 'react-native-gesture-handler'

export default function Hotels() {
    let [hotels, setHotels] = useState([])
    let [text, setText] = useState("")
    useEffect(() => {
        axios
            .get('https://back-error-404.up.railway.app/api/hotels')
            .then(res => setHotels(res.data.response))
            .catch(res => console.log(res))
    }, [])

    const onChange = (e) => {
        setText(e)
        axios
            .get(`https://back-error-404.up.railway.app/api/hotels?name=${text} `)
            .then(res => setHotels(res.data.response))
            .catch(res => console.log(res))

    }
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.name}>
                    <Text>Name : </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Name Hotel"
                        onChangeText={onChange}
                        value={text}
                    />
                </View>
                <View style={styles.con}>
                    {hotels.map(e => <View style={styles.cont}><ImageBackground style={styles.img} source={{ uri: e.photo[0] }}>
                        <Text style={styles.text}>
                            {e.name}
                        </Text>
                    </ImageBackground>
                    {hotels.length === 0 ? <Image source={require('../../public/img/imagenes/404_Error.gif')} /> : ""}
                    </View>)}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    con: {
        alignItems: "center",
        display: "flex"
    },
    img: {
        flex: 1,
        paddingBottom: 40,

    },
    cont: {
        height: 200,
        width: 250,
        paddingBottom: 40,
        borderRadius: 40,
        flex: 1,
    },
    text: {
        textAlign: "center",
        fontSize: 20,
        color: "white"
    },
    name: {
        alignItems: "center",
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})