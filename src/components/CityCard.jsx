import React from 'react'
import { View, Text, Image, Button, StyleSheet, Dimensions } from 'react-native'
const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

export default function CityCard(props) {
    let { photo, name, navigation, city} = props;

    const NavigationContainer = () => {
        navigation.navigate('DetailsCity', { info: city  })
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: photo }} resizeMode="cover" style={styles.img}></Image>
            <View style={styles.containerBody}>
                <Text style={styles.text}>{name}</Text>
                <Button 
                    onPress={NavigationContainer}
                    title="Enter"
                    color="white"
                    fontWeight= "bold"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 350,
        height: 300,
        marginTop: 24,
        alignItems: 'center',
    },
    containerBody: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%',
        padding: 10
    },
    text: {
        width: '100%',
        color: 'aliceblue',
        padding: 10,
        fontSize: 28,
        textAlign: 'center',
        marginBottom: 10,
        fontWeight: "500",
        justifyContent: "center"
    },
    img: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        borderRadius: 30,
        boxShadow: '3px 2px 4px rgba(0,0,0,0.3)'
    },
});
