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

const PyqData_Sem = () => {
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
            Choose Your Semester
          </Text>
        </View>
      <View>
        {pyq[0].Branch[0].Semester.map(semName => {
          return (
            <TouchableOpacity onPress={()=>navigation.navigate('PyqData_sub')}
              key={semName.id}
              
              style={{
                marginBottom:responsiveHeight(2.5),
                width: responsiveWidth(93),
                height: responsiveHeight(13),
                backgroundColor: '#50C4ED',
                alignSelf: 'center',
                borderRadius: 17,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: responsiveWidth(15),
                shadowColor: '#blue',
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
                source={require('../../../Image/semester.png')}
              />

              <Text
                style={{
                  fontSize: responsiveFontSize(2.5),
                  color: 'black',
                  fontWeight: 'bold',
                }}>
                {semName.Sem}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default PyqData_Sem;
