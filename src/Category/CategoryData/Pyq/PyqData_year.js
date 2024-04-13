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

const PyqData_year = () => {
  const navigation = useNavigation();
  console.log()
 

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
            Choose Pyq Year
          </Text>
        </View>
      <View>
        {pyq[0].Branch[0].Semester[0].Subject[0].Year.map(yr => {
          return (
            <TouchableOpacity  onPress={()=>navigation.navigate('ViewPyq', {url:yr.Pyq})}
              key={yr.id}
              
              style={{
                marginBottom:responsiveHeight(2.5),
                width: responsiveWidth(93),
                height: responsiveHeight(13),
                backgroundColor: '#B3C8CF',
                alignSelf: 'center',
                borderRadius: 17,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: responsiveWidth(20),
                shadowColor: 'black',
                shadowOpacity: 0.25,
                shadowRadius: 29,
                elevation: 5,
              }}>
              <Image
                style={{
                  resizeMode: 'contain',
                  width: responsiveWidth(19),
                  height: responsiveHeight(8.2),
                }}
                source={require('../../../Image/year.png')}
              />

              <Text
                style={{
                  fontSize: responsiveFontSize(3.2),
                  color: 'black',
                  fontWeight: 'bold',
                }}>
                {yr.Yr}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default PyqData_year;
