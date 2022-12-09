import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Hotels from '../screens/Hotels';

const Stack = createNativeStackNavigator();

export default function HotelNavigation() {
    return (
            <Stack.Navigator>
                <Stack.Screen name='Hotels' component={Hotels} options={{ headerShown: false }}/>
            </Stack.Navigator>
    )
}