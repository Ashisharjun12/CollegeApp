import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import pyq from '../../../Json/Pyq.json';
import GoBack from '../../../Common/GoBack';

const PyqData_sub = () => {
  const navigation = useNavigation();

  return (
    <View>
        <GoBack/>

      <View style={{marginBottom: responsiveHeight(3)}}>
          <Text
            style={{
              fontSize: responsiveFontSize(2.7),
              color: 'black',
              fontWeight: 'bold',
              alignSelf: 'center',
            }}>
            Choose Your Subject
          </Text>
        </View>
      <View>
        {pyq[0].Branch[0].Semester[0].Subject.map(sub => {
          return (
            <TouchableOpacity  onPress={()=>navigation.navigate('PyqData_year')}
              key={sub.id}
              
              style={{
                marginBottom:responsiveHeight(2.5),
                width: responsiveWidth(93),
                height: responsiveHeight(13),
                backgroundColor: '#74E291',
                alignSelf: 'center',
                borderRadius: 17,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: responsiveWidth(15),
                shadowColor: '#green',
                shadowOpacity: 0.25,
                shadowRadius: 29,
                elevation: 5,
              }}>
              <Image
                style={{
                  resizeMode: 'contain',
                  width: responsiveWidth(21),
                  height: responsiveHeight(8.5),
                }}
                source={{uri: sub.Sub_Img}}
              />

              <Text
                style={{
                  fontSize: responsiveFontSize(2.5),
                  color: 'black',
                  fontWeight: 'bold',
                }}>
                {sub.Sub_Name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default PyqData_sub;
