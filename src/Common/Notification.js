import {View, Text} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import GoBack from './GoBack';

const Notification = () => {
  return (
    <View>
<GoBack/>
    
    <View style={{marginTop: responsiveHeight(40)}}>
      <Text
        style={{
          fontSize: responsiveFontSize(2.8),
        
          color: 'black',
          alignSelf: 'center',
        }}>
        {' '}
        No Notifications
      </Text>
    </View>
    </View>
  );
};

export default Notification;
