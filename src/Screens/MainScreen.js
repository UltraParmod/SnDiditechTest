import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Bottomnavigation from '../Navigations/Bottomnavigation'

const MainScreen = () => {
  return (
    <View style={{flex:1}}>
      <Bottomnavigation />
    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({})