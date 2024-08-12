import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import StringsName from '../Utils/StringsName'
import Colors from '../Utils/Colors'
import { hp, wp } from '../Utils/Responsive'
import ImagePath from '../Utils/ImagePath'


export default function LatestFood() {
    const [lastData, setLatestData] = useState('')
    // LatestFood api data 
    const latestFood = [
        {
            "id": 1,
            "image": require('../assets/Images/ImgSlider01.jpg'),
            "foodTitle": 'Vog'

        },
        {
            "id": 2,
            "image": require('../assets/Images/ImgSlider02.jpg'),
            "foodTitle": "Mania's"
        },
        {
            "id": 3,
            "image": require('../assets/Images/ImgSlider03.jpg'),
            "foodTitle": 'Non-Vag'
        },
        {
            "id": 4,
            "image": require('../assets/Images/ImgSlider04.jpg'),
            "foodTitle": "Combo's"
        },
        {
            "id": 5,
            "image": require('../assets/Images/ImgSlider01.jpg'),
            "foodTitle": 'Vog'

        },
        {
            "id": 5,
            "image": require('../assets/Images/ImgSlider02.jpg'),
            "foodTitle": "Mania's"
        },
        {
            "id": 7,
            "image": require('../assets/Images/ImgSlider03.jpg'),
            "foodTitle": 'Non-Vag'
        },
        {
            "id": 8,
            "image": require('../assets/Images/ImgSlider04.jpg'),
            "foodTitle": "Combo's"
        },
    ]

    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.imageCardContinaer}>
                <View>
                    <Image source={item.image} style={styles.imageCard} />
                    <Text style={styles.latestFoodTxt}>{item.foodTitle}</Text>
                </View>
            </View>

        )
    }

    return (
        <View style={styles.contianer}>
            <Text style={styles.latestFood}>{StringsName.latestFood}</Text>
            <FlatList
                data={latestFood} renderItem={renderItem}
                horizontal={true}
                pagingEnabled={true}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    contianer: {
        padding: wp(2),
        backgroundColor: Colors.White,
        borderRadius: wp(2),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

        elevation: 1,
        marginTop: hp(2)
    },
    latestFood: {
        color: Colors.Black,
        fontSize: hp(2)
    },
    imageCardContinaer: {
        marginTop: hp(1),
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: wp(2)
    },
    imageCard: {
        width: wp(18),
        borderRadius: wp(2),
        height: wp(18)
    },
    latestFoodTxt: {
        textAlign: 'center',
        color: Colors.Black,
        fontSize: hp(1.8),
        fontWeight: '400',
        marginVertical: hp(.5)
    }

})