import {View, Text} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Download = () => {
  return (
    <View
      style={{
        width: responsiveWidth(80),
        backgroundColor: 'black',
        height: responsiveHeight(6),
        alignSelf: 'center',
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: responsiveHeight(2),
        marginBottom:responsiveHeight(2)
      }}>
      <Text
        style={{
          fontSize: responsiveFontSize(3),
          color: 'white',
          textAlign: 'center',
        }}>
        Download
      </Text>
    </View>
  );
};

export default Download;
