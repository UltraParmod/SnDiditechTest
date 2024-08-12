import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MainScreen from '../Screens/MainScreen'
import Customenavigation from './Customenavigation'

const Drawer=createDrawerNavigator()
export default function Drawernavigation() {
  return (
   <Drawer.Navigator screenOptions={{headerShown:false}} drawerContent={props=><Customenavigation {...props}/>}>
    <Drawer.Screen name='MainScreen' component={MainScreen}/>
   </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({})