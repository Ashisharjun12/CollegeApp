import {View, Text, ScrollView,TouchableOpacity} from 'react-native';
import React from 'react';
import GoBack from '../Common/GoBack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Event = () => {
  return (
    <ScrollView style={{backgroundColor: '#ECEDF2', height: '100%'}}>
      <View>
        <GoBack />
        <View style={{marginTop: responsiveHeight(2.5)}}>
          <Text
            style={{
              fontSize: responsiveFontSize(2.5),
              fontWeight: '500',
              color: 'black',
              marginLeft: responsiveWidth(7),
            }}>
            Upcoming Events
          </Text>



        </View>
        <View>
        <Text
        style={{
          color: 'black',
          fontSize: responsiveFontSize(2.7),
          alignSelf: 'center',
          position:'absolute',
          marginTop:responsiveHeight(30),
          fontWeight:'bold'
        }}>
        {'   This Feature is\nin UnderDevelopment🙂'}
      </Text>
        </View>

        <TouchableOpacity
          style={{
            width: responsiveWidth(15),
            height: responsiveWidth(15),
            backgroundColor: 'black',
            borderRadius: 99,
            marginTop: responsiveHeight(67),
            marginLeft: responsiveWidth(74),
            justifyContent:"center",
            alignItems:'center'
            
          }}>
          <AntDesign
            name="plus"

            color={'white'}
            size={38}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Event;
