import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DetailsCity from '../screens/DetailsCity';

const Stack = createNativeStackNavigator();

export default function CityNavigation() {
    return (
            <Stack.Navigator>
                <Stack.Screen name='DetailsCity' component={DetailsCity} options={{ headerShown: false }}/>
            </Stack.Navigator>
    )
}