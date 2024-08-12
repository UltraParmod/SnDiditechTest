import { FlatList, Image, StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { hp, wp } from '../Utils/Responsive'


const screenWidth = Dimensions.get('window').width
const HomeSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const flatListRef = useRef()

    // homeSliderData api data 
    const homeSliderData = [
        {
            "id": 1,
            "image": require('../assets/Images/ImgSlider01.jpg'),
        },
        {
            "id": 2,
            "image": require('../assets/Images/ImgSlider02.jpg'),
        },
        {
            "id": 3,
            "image": require('../assets/Images/ImgSlider03.jpg'),
        },
        {
            "id": 4,
            "image": require('../assets/Images/ImgSlider04.jpg'),
        },
    ]
    // autoplay
    useEffect(() => {
        let interval =
            setInterval(() => {
                if (activeIndex === homeSliderData.length - 1) {
                    flatListRef.current.scrollToIndex({
                        index: 0,
                        animaction: true
                    })
                }
                else {
                    flatListRef.current.scrollToIndex({
                        index: activeIndex + 1,
                        animaction: true
                    })
                }
            }, 2000)
        return () => clearInterval(interval)
    })
    // getItemLayout screen 
    const getItemLayout = (data, index) => ({
        length: screenWidth,
        offset: screenWidth * index,
        index: index
    })
    // handleScroll
    const handleScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x
        const index = scrollPosition / screenWidth
        setActiveIndex(index)
    }
    // handle  Dotted 
    const renderDotIndicate = () => {
        return (
            homeSliderData.map((dot, index) => {
                if (activeIndex === index) {
                    return (
                        <View style={styles.outerDotted}>
                        </View>
                    )
                }
                else {
                    return (
                        <View key={index} style={[styles.outerDotted, styles.innerDotted]}>
                        </View>
                    )
                }
            }
            )
        )
    }
    // renderItem
    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.sliderContainer}>
                <Image source={item.image} style={styles.sliderImg} />
            </View>
        )
    }


    return (

        <View>
            <FlatList
                data={homeSliderData} renderItem={renderItem}
                horizontal={true}
                pagingEnabled={true}
                onScroll={handleScroll}
                ref={flatListRef}
                keyExtractor={(item) => item.id}
                getItemLayout={getItemLayout}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                {
                    renderDotIndicate()
                }
            </View>
        </View>




    )
}

export default HomeSlider

const styles = StyleSheet.create({
    sliderContainer: {
        height: hp(21),
        width: screenWidth,
        marginTop: hp(1.5),
        // borderRadius:wp(3),
    },
    sliderImg: {
        // borderRadius:wp(3),
        height: hp(21),
        width: screenWidth,
    },
    outerDotted: {
        marginTop: hp(2),
        backgroundColor: 'darkgreen',
        height: wp(2.2),
        width: wp(2.2),
        borderRadius: wp(2.2),
        marginHorizontal: wp(1)
    },
    innerDotted: {
        borderWidth: wp(.1),
        backgroundColor: 'rgba(0,0,0,0.1)',
    },

})