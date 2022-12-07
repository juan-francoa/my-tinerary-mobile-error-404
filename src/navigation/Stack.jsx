import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';

const StackNav = createNativeStackNavigator();


export default function Stack() {
  return (
    <StackNav.Navigator>
        <StackNav.Screen name="Home" component={Home} />
      </StackNav.Navigator>
  )
}

  