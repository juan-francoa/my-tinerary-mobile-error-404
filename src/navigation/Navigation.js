import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/FontAwesome5';
import HomeNavigation from './HomeNavigation';
import CitiesNavigation from './CitiesNavigation';
import HotelsNavigation from './HotelsNavigation';
import AccountNavigation from './AccountNavigation';


const Tab = createBottomTabNavigator();


export default function Navigation() {
  return (
    <Tab.Navigator>
        <Tab.Screen 
        name="Home"
        component={HomeNavigation}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({color, size}) => <Ionicons name='home' color={color} size={size} />
        }} />
        <Tab.Screen name="Cities" 
        component={CitiesNavigation} 
        options={{
          tabBarLabel: "Cities",
          tabBarIcon: ({color, size}) => <Ionicons name='city' color={color} size={size} />
        }}/>
        <Tab.Screen name="Hotels" 
        component={HotelsNavigation}
        options={{
          tabBarLabel: "Hotels",
          tabBarIcon: ({color, size}) => <Ionicons name='hotel' color={color} size={size} />
        }}/>
        <Tab.Screen name="Account" 
        component={AccountNavigation}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({color, size}) => <Ionicons name='user' color={color} size={size} />
        }}/>
      </Tab.Navigator>
  )
}

  