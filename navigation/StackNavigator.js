import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import CityScreen from '../screens/CityScreen.js';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AvailableParkingSpotsScreen from '../screens/AvailableParkingSpotsScreen';
import ParkingSpotInfo from '../screens/ParkingSpotInfo';
import ProfileScreen from '../screens/ProfileScreen';
import {User} from 'firebase/auth';
import AddParkingScreen from '../screens/AddParkingScreen';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { authFire } from '../firebase';




const StackNavigator = () => {

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Explore"
          component={CityScreen}
          options={{
            tabBarLabel: "Explore",
            tabBarLabelStyle: { color: "#008E97" },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialIcons name="explore" size={24} color="grey" />
              ) : (
                <MaterialIcons name="explore" size={24} color="black" />
              ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            tabBarLabelStyle: { color: "#008E97" },
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="person" size={24} color="grey" />
              ) : (
                <Ionicons name="person" size={24} color="black" />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
        <Stack.Screen name="CityScreen" component={CityScreen} options={{headerShown:false}} />
        <Stack.Screen name="Profile" component={ProfileScreen}/>
        <Stack.Screen name="Available" component={AvailableParkingSpotsScreen} options={{headerShown:false}} />
        <Stack.Screen name="ParkingSpot" component={ParkingSpotInfo} options={{headerShown:false}} />
        <Stack.Screen name="Main" component={BottomTabs} options={{headerShown:false}} />
        <Stack.Screen name="AddPlace" component={AddParkingScreen} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})