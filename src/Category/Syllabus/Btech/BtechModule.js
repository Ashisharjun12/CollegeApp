import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import BtechJson from '../../../Json/BtechJson.json';
import GoBack from '../../../Common/GoBack';

const BtechModule = () => {

  const navigation = useNavigation();
  console.log(
    BtechJson[0].Branch[0].Semester[0].subjects[0].Module_List[0].Module[1].Module_No)
 

  return (
    <View>
      <GoBack style={{marginLeft: responsiveWidth(7)}} />
      <View style={{marginBottom: responsiveHeight(3)}}>
        <Text
          style={{
            fontSize: responsiveFontSize(2.7),
            color: 'black',
            fontWeight: 'bold',
            alignSelf: 'center',
          }}>
          Choose Your Module
        </Text>
      </View>

      {BtechJson[0].Branch[0].Semester[0].subjects[0].Module_List[0].Module.map(
        mod => {
          return (
            <TouchableOpacity
            onPress={()=>navigation.navigate('ModuleData')}
              key={mod.id}
             
              style={{
                flexDirection: 'row',
                width: responsiveWidth(90),
                backgroundColor: 'black',
                height: responsiveHeight(7),
                alignSelf: 'center',
                borderRadius: 12,
                alignItems: 'center',
                justifyContent: 'space-evenly',
                marginTop: responsiveHeight(2),
              }}>
              <Text
                style={{
                  fontSize: responsiveFontSize(3),
                  color: 'white',
                  textAlign: 'center',
                }}>
                {mod.Module_No}
              </Text>
            </TouchableOpacity>

          );

        }
      )}



     
    </View>
  );
};

export default BtechModule;
