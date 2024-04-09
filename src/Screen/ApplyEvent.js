import {View, Text} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import GoBack from '../Common/GoBack';

const ApplyEvent = () => {
  return (
    <View>
      <GoBack/>
      <Text
        style={{
          color: 'black',
          fontSize: responsiveFontSize(2.7),
          alignSelf: 'center',
          marginTop: responsiveHeight(40),
          fontWeight:'bold'
        }}>
        {'   This Feature is\nin UnderDevelopment🙂'}
      </Text>
    </View>
  );
};

export default ApplyEvent;
