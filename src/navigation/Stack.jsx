import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Cities from '../screens/Cities';

const StackNav = createNativeStackNavigator();


export default function Stack() {
  return (
    <StackNav.Navigator>
        <StackNav.Screen name="Home" component={Home} />
        <StackNav.Screen name="Cities" component={Cities} />
      </StackNav.Navigator>
  )
}

  