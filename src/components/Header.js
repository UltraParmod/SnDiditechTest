import {Alert, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import VectorIcon from '../Utils/VectorIcon';
import ImagePath from '../Utils/ImagePath';
import {hp, wp} from '../Utils/Responsive';
import Colors from '../Utils/Colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

export default function Header({onPress}) {
  const fetchFoodData = useSelector(state => state?.FoodCount?.value);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          //  navigation.openDrawer()
          onPress();
        }}>
        <VectorIcon type="Feather" name="menu" size={27} color={Colors.Gray} />
      </TouchableOpacity>
      <View style={styles.loctaion}>
        <View>
          <VectorIcon
            type="Entypo "
            name="location-pin"
            size={30}
            color={Colors.Primary}
          />
        </View>
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.Home}>Home</Text>
            <TouchableOpacity
              onPress={() => {
                Alert.alert('Alert');
              }}>
              <VectorIcon
                type="Feather"
                name="chevron-down"
                size={30}
                color={Colors.Gray}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.addresss}>247,Park Street , Ny 110048</Text>
        </View>
      </View>
      <Text
        style={{
          fontSize: hp(2),
          color: Colors.White,
          position: 'relative',
          left: wp(5),
          backgroundColor: 'red',
          paddingHorizontal: wp(1),
          borderRadius: wp(5),
          zIndex: 999,
          top: hp(-1),
        }}>
        {fetchFoodData}
      </Text>
      <View style={styles.UserProfileContainer}>
        <Image source={ImagePath.UserProfile} style={styles.UserProfile} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  UserProfileContainer: {
    width: wp(10),
    height: wp(10),
    borderRadius: wp(10),
  },
  UserProfile: {
    width: wp(10),
    height: wp(10),
    borderRadius: wp(10),
  },
  loctaion: {
    flex: 0.9,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Home: {
    fontSize: hp(2),
    color: Colors.Gray,
    fontWeight: '400',
  },
  addresss: {
    color: 'red',
    fontSize: hp(2),
    color: Colors.Gray,
    fontWeight: '400',
  },
});
