import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Splash from '../Screens/Splash'
import MainScreen from '../Screens/MainScreen'
import Drawernavigation from './Drawernavigation'

const Stack=createNativeStackNavigator()
export default function Stacknavigation() {

  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}} >
            <Stack.Screen  name='Splash' component={Splash} />
            <Stack.Screen  name='Drawernavigation' component={Drawernavigation}/>

        </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})