import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Cities from '../screens/Cities'

const Stack = createNativeStackNavigator();

export default function CitiesNavigation() {
    return (
            <Stack.Navigator>
                <Stack.Screen name='Cities' component={Cities}/>
            </Stack.Navigator>
    )
}