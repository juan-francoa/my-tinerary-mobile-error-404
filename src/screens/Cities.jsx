import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    ImageBackground,
    StyleSheet,
    Button,
    Image,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { TextInput } from 'react-native-gesture-handler'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import CityCard from '../components/CityCard';

export default function Cities(props) {
    let [cities, setCities] = useState([])
    let [che, setCheck] = useState([])
    let [chex, setCheckx] = useState([])
    let [text, setText] = useState("")

    useEffect(() => {
        axios
            .get('https://back-error-404.up.railway.app/api/cities')
            .then(res => {setCities(res.data.response)
                setCheck(  [...new Set(res.data.response.map(e => e.continent))] )
            })
            .catch(res => console.log(res))
    }, [])

    const onChange = (e) => {
        setText(e)
        axios
            .get(`https://back-error-404.up.railway.app/api/cities?name=${text} `)
            .then(res => setCities(res.data.response))
            .catch(res => console.log(res))

    }

    const navigation = (e) => {
        console.log(e)

    }
    return (
        <ImageBackground style={styles.img} source={require('../../public/img/imagenes/fondo5.jpg')}>
        <SafeAreaView>
            <ScrollView>
                <View>
                    <View style={styles.name}>
                        <Text>Name : </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Name City"
                            onChangeText={onChange}
                            value={text}
                        />
                    </View>
                </View>
                <View>
                    {che.map(e =>{
                        return <BouncyCheckbox
                        size={25}
                        fillColor="black"
                        unfillColor="#FFFFFF"
                        text={e}
                        iconStyle={{ borderColor: "black" }}
                        innerIconStyle={{ borderWidth: 2 }}
                        textStyle={{ fontFamily: "JosefinSans-Regular" }}
                
                    />
                    })}
                </View>
                <View style={styles.conten}>
                    
                        
                                {cities.map(city => <CityCard key={city._id} id={city._id} city={city} name={city.name} navigation={props.navigation} continent={city.continent} photo={city.photo} />)}
                        
                    
                    {cities.length === 0 ? <Image source={require('../../public/img/imagenes/404_Error.gif')} /> : ""}
                </View>
            </ScrollView>
        </SafeAreaView>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    card: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        justifyItems: "center"
    },
    conten: {
        justifyContent: "center",
        alignItems: "center",
        display: "flex"
    },
    infoText: {
        color: "white",
        textAlign: "center",
        fontSize: 50,
    },
    input: {
        justifyContent: "center",
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    name: {
        alignItems: "center",
    }
})