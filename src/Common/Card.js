import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Card = ({name, image, cardStyle, bgColor, shadowClr,navigation,screen}) => {
  return (
    <TouchableOpacity onPress={()=>navigation.navigate(screen)}
      style={[
        {
          width: responsiveWidth(93),
          height: responsiveHeight(13),
          backgroundColor: bgColor ? bgColor : '#C6EBC5',
          alignSelf: 'center',
          borderRadius: 17,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: responsiveWidth(5),
          shadowColor: shadowClr ? shadowClr : 'black',
          shadowOpacity: 0.25,
          shadowRadius: 29,
          elevation: 5,
        },
        cardStyle,
      ]}>
      <Image
        style={{
          resizeMode: 'contain',
          width: responsiveWidth(21),
          height: responsiveHeight(8.5),
        }}
        source={image}
      />

      <Text
        style={{
          fontSize: responsiveFontSize(2.5),
          color: 'black',
          fontWeight: 'bold',
        }}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default Card;
