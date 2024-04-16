import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import GoBack from '../Common/GoBack';
import {responsiveFontSize} from 'react-native-responsive-dimensions';


const ViewDocs = () => {

 



  return (
    <View>
      <GoBack />
      <Text style={{color: 'black', fontSize: responsiveFontSize(3)}}>
        Your Documents
      </Text>
    </View>
  );
};

export default ViewDocs;
