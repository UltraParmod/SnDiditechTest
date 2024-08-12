import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {hp, wp} from '../Utils/Responsive';
import Colors from '../Utils/Colors';
import {AirbnbRating} from 'react-native-ratings';
import VectorIcon from '../Utils/VectorIcon';
import {useDispatch, useSelector} from 'react-redux';
import { decrement, increment } from '../Redux/Slice/FoodCountSlice';

export default function ProductList() {
  // productListData api data
  const productListData = [
    {
      id: 1,
      image: require('../assets/Images/ImgSlider01.jpg'),
      foodTitle: 'Vog',
    },
    {
      id: 2,
      image: require('../assets/Images/ImgSlider02.jpg'),
      foodTitle: "Mania's",
    },
    {
      id: 3,
      image: require('../assets/Images/ImgSlider03.jpg'),
      foodTitle: 'Non-Vag',
    },
    {
      id: 4,
      image: require('../assets/Images/ImgSlider04.jpg'),
      foodTitle: "Combo's",
    },
    {
      id: 5,
      image: require('../assets/Images/ImgSlider01.jpg'),
      foodTitle: 'Vog',
    },
    {
      id: 5,
      image: require('../assets/Images/ImgSlider02.jpg'),
      foodTitle: "Mania's",
    },
    {
      id: 7,
      image: require('../assets/Images/ImgSlider03.jpg'),
      foodTitle: 'Non-Vag',
    },
    {
      id: 8,
      image: require('../assets/Images/ImgSlider04.jpg'),
      foodTitle: "Combo's",
    },
  ];
  const fetchFoodData = useSelector(state => state?.FoodCount?.value);
  const dispatch = useDispatch();
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.cardContainer}>
        <Image source={item.image} style={styles.foodImg} />

        {/* leftContiner */}
        <View style={styles.leftContiner}>
          {/* Top Txt with veg icon start  */}
          <View style={styles.topTxtContainer}>
            <View style={styles.vegIconContainer}>
              <View style={styles.vegIcon}></View>
            </View>
            <Text style={styles.foodName}>Crispy Faladfel Wrap</Text>
          </View>
          {/* Top Txt with veg icon End  */}
          {/* rating section start  */}
          <View style={styles.ratingContainer}>
            <AirbnbRating
              reviews={['Very Low', 'Low', 'Medium', 'Good', 'Very Good']}
              count={5}
              defaultRating={3}
              size={14}
              // reviewSize={hp(2)}
              onFinishRating={rating => {
                console.log('Rating is:', rating);
              }}
              showRating={false}
            />
            <Text style={styles.ratingsTxt}> 480 Votes </Text>
          </View>
          {/* rating section End  */}

          {/* bottom Text start */}
          <View style={styles.bottomTxtContainer}>
            <Text style={styles.foodParaLeft}>
              A true legenal clearny hummus topeed with Crispy talatal picket
              slow customer
            </Text>

            <View style={styles.countContainer}>
              <TouchableOpacity
                onPress={() => {
                  dispatch(increment())
                }}>
                <VectorIcon
                  type="AntDesign"
                  name="pluscircleo"
                  size={20}
                  color={Colors.Primary}
                />
              </TouchableOpacity>

              <Text style={styles.CounNo}>{fetchFoodData}</Text>
              <TouchableOpacity
                onPress={() => {
                  dispatch(decrement())
                }}>
                <VectorIcon
                  type="AntDesign"
                  name="minuscircleo"
                  size={20}
                  color={Colors.Primary}
                />
              </TouchableOpacity>
            </View>
          </View>
          {/* bottom Text end here */}
        </View>
      </View>
    );
  };
  return (
    <View style={styles.contianer}>
      <FlatList
        data={productListData}
        renderItem={renderItem}
        // horizontal={true}
        // pagingEnabled={true}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contianer: {
    // backgroundColor:'red'
    // flex: 1,
  },
  cardContainer: {
    width: '100%',
    height: hp(17),
    borderWidth: 1,
    borderRadius: wp(5),
    marginBottom: hp(2),
    borderColor: 'lightgray',
    flexDirection: 'row',
    padding: wp(2),
  },
  foodImg: {
    width: wp(23),
    height: hp(15),
    borderRadius: wp(2),
  },
  leftContiner: {
    marginLeft: wp(1),
  },
  topTxtContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
  vegIconContainer: {
    width: wp(4),
    height: wp(4),
    borderWidth: wp(0.2),
    marginRight: wp(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  vegIcon: {
    width: wp(3),
    height: wp(3),
    borderRadius: wp(3),
    backgroundColor: Colors.Primary,
  },
  foodName: {
    color: Colors.Black,
    fontSize: hp(2),
    fontWeight: '400',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingsTxt: {
    color: Colors.Gray,
    fontSize: hp(1.8),
  },
  bottomTxtContainer: {
    flexDirection: 'row',
    // width:'65%',
  },
  foodParaLeft: {
    color: Colors.Black,
    width: '60%',
    fontSize: hp(1.9),
  },
  countContainer: {
    width: '25%',
    flexDirection: 'row',
    // alignItems:'flex-end'
    alignItems: 'center',
    marginTop: hp(6),
  },
  CounNo: {
    fontSize: hp(2.5),
    textAlign: 'center',
    fontWeight: '600',
    color: Colors.Black,
    marginHorizontal: wp(2),
  },
});
