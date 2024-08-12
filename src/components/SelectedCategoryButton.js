import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { hp, wp } from '../Utils/Responsive'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Colors from '../Utils/Colors'

export default function SelectedCategoryButton({item,selectedCategory,setSelectedCategory}) {
  return (
 
<View style={styles.container}>
<TouchableOpacity onPress={()=>setSelectedCategory(item)} style={[styles.buttonStyle,selectedCategory===item && {backgroundColor:Colors.White}]}>
        
        <Text style={[styles.buttonTxt,selectedCategory===item && {color:Colors.Primary}]}>{item}</Text>
  
    </TouchableOpacity>
</View>
   
  )
}

const styles = StyleSheet.create({
    container:{
        marginRight:wp(5),
        marginVertical:hp(2)
    },
    buttonStyle:{
      
        borderWidth:1,
        borderColor:Colors.Primary,
        paddingHorizontal:wp(8),
        paddingVertical:wp(2),
        borderRadius:wp(5),
        alignItems:'center',   
        backgroundColor:Colors.Primary
    },
      buttonTxt:{
        color:Colors.White,
        fontSize:hp(1.8)
      }
})