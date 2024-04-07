import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const CommonCategory = ({
  name,
  image,
  bgcolor,
  imageStyle,
  screen,
  navigation,
}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(screen)}
      style={{
        width: responsiveWidth(45),
        height: responsiveHeight(25),
        backgroundColor: bgcolor ? bgcolor : '#2EB872',
        borderRadius: 19,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 8,
      }}>
      <View
        style={{
          width: responsiveWidth(40),
          backgroundColor: '#C4E4FF',
          alignSelf: 'center',
          height: responsiveHeight(4),
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 16,
          marginTop: responsiveHeight(4),
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: responsiveFontSize(2.6),
            textAlign: 'center',
            fontWeight:'500'
          }}>
          {name}
        </Text>
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: responsiveWidth(6),
        }}>
        <Image
          style={[
            {resizeMode: 'contain', height: responsiveHeight(17)},
            imageStyle,
          ]}
          source={image}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CommonCategory;
