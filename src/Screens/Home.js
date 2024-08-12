import { Alert, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import { hp, wp } from '../Utils/Responsive'
import HomeSlider from '../components/HomeSlider'
import LatestFood from '../components/LatestFood'
import Colors from '../Utils/Colors'
import SelectedCategoryButton from '../components/SelectedCategoryButton'
import ProductList from '../components/ProductList'
import { useDispatch, useSelector } from 'react-redux'


const selectedCategoryData = ['2 Restaurant', 'Non-veg', 'Top-Rate', 'Veg']
const Home = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState('2 Restaurant')

  return (
    <View style={styles.container}>
      <Header
        onPress={() => {
          Alert.alert('Alert')
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
      {/* HomeSlider */}
      <HomeSlider />
      {/* LatestFood */}
      <LatestFood />
      {/* horizontal line  */}
   
      <View style={{ height: hp(.2), marginTop: hp(2), backgroundColor: '#f1f1f1' }}></View>
      {/* SelectedCategoryButton */}
      <View>
        <FlatList data={selectedCategoryData} renderItem={({ item }) => <SelectedCategoryButton item={item} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />} keyExtractor={(item) => item}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <ProductList />

      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(5),
    paddingTop: hp(2),
    backgroundColor: Colors.White
  }
})

