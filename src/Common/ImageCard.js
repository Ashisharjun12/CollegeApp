import { View, Text ,Image} from 'react-native'
import React from 'react'
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';

const ImageCard = ({image,bgColor}) => {
  return (
    <View
    style={{
      width: responsiveWidth(90),
      backgroundColor: bgColor ? bgColor : '#74E291',
      height: responsiveHeight(27),
      alignSelf: 'center',
      borderRadius: 20,
      marginBottom: responsiveHeight(3),
    }}>
    <Image
      style={{
        resizeMode: 'contain',
        width: responsiveWidth(90),
        height: responsiveHeight(27),
      }}
      source={image}
    />
  </View>
  )
}

export default ImageCard