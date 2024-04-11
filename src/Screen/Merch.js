import {View, Text} from 'react-native';
import React from 'react';
import GoBack from '../Common/GoBack';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';

const Merch = () => {
  return (
    <View>
      <GoBack />
      <Text
        style={{
          fontSize: responsiveFontSize(2.7),
          color: 'black',
          fontWeight: 'bold',
          alignSelf: 'center',
          marginTop: responsiveHeight(37),
        }}>
        {' '}
        Comming Soon...🙂
      </Text>
    </View>
  );
};

export default Merch;
