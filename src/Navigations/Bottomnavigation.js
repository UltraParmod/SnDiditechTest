import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home'
import Search from '../Screens/Search'
import MyOrder from '../Screens/MyOrder'
import Cart from '../Screens/Cart'
import VectorIcon from '../Utils/VectorIcon'

import Entypo from 'react-native-vector-icons/dist/Entypo';
import Colors from '../Utils/Colors'

const Bottom=createBottomTabNavigator()
const Bottomnavigation = () => {
  return (
    <Bottom.Navigator screenOptions={{headerShown:false,tabBarShowLabel:false,tabBarActiveTintColor:Colors.Primary}} >
      <Bottom.Screen name='Home' component={Home} 
      options={{
        tabBarIcon:({size,color})=>(
          <VectorIcon
          type="Entypo"
          name="home"
          size={size}
          color={color}
        />
        )
      }}
      />
      <Bottom.Screen name='Search' component={Search} 
        options={{
          tabBarIcon:({size,color})=>(
            <VectorIcon
            type="AntDesign"
            name="search1"
            size={size}
            color={color}
          />
          )
        }}
      />
      <Bottom.Screen name='MyOrder' component={MyOrder} 
      options={{
        tabBarIcon:({size,color})=>(
          <VectorIcon
          type="FontAwesome"
          name="reorder"
          size={size}
          color={color}
        />
        )
      }}
      />
      <Bottom.Screen name='Cart' component={Cart} 
      options={{
        tabBarIcon:({size,color})=>(
          <VectorIcon
          type="Entypo"
          name="shopping-cart"
          size={size}
          color={color}
        />
        )
      }}
      />

    </Bottom.Navigator>
  )
}

export default Bottomnavigation

const styles = StyleSheet.create({})