import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import pyq from '../../../Json/Pyq.json';
import GoBack from '../../../Common/GoBack';

const PyqData = () => {
  const navigation = useNavigation();

  // console.log(pyq[0].Branch)

  return (
    <ScrollView>
    <View>
      <GoBack style={{marginLeft:responsiveWidth(7)}}/>
      <View style={{marginBottom: responsiveHeight(3)}}>
          <Text
            style={{
              fontSize: responsiveFontSize(2.7),
              color: 'black',
              fontWeight: 'bold',
              alignSelf: 'center',
            }}>
            Choose Your Branch
          </Text>
        </View>
      <View>
        {pyq[0].Branch.map(branch => {
          return (
            <TouchableOpacity
              key={branch.id}
              onPress={() => navigation.navigate('PyqData_Sem',{branchId: branch.id})}
              style={{
                marginBottom:responsiveHeight(2.5),
                width: responsiveWidth(93),
                height: responsiveHeight(13),
                backgroundColor: '#FFAF45',
                alignSelf: 'center',
                borderRadius: 17,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: responsiveWidth(5),
                shadowColor: 'orange',
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
                source={{uri : branch.Branch_Img}}
              />

              <Text
                style={{
                  fontSize: responsiveFontSize(2.5),
                  color: 'black',
                  fontWeight: 'bold',
                }}>
                {branch.Branch_Name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
    </ScrollView>
  );
};

export default PyqData;
