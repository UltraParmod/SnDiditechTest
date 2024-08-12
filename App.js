import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Stacknavigation from './src/Navigations/Stacknavigation'

import { LogBox } from 'react-native';
import { Provider } from 'react-redux'
import { store } from './src/Redux/Store';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
export default function App() {
  return (
    <View style={{flex:1}}>
      <Provider store={store}>
        <Stacknavigation/>
       
      </Provider>
     </View> 
  )
}

const styles = StyleSheet.create({})
