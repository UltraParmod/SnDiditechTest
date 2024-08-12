import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import ImagePath from '../Utils/ImagePath';
import {wp} from '../Utils/Responsive';

export default function Splash({navigation}) {
  useEffect(()=>{
      setTimeout(()=>{
              navigation.navigate('Drawernavigation')
      },2000)
  },[])
  return (
    <View style={styles.container}>
      <Image
        source={ImagePath.snDigitech_logo}
        style={styles.snDigitech_logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(4),
  },
  snDigitech_logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
