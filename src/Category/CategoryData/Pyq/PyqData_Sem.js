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

const PyqData_Sem = ({route}) => {
  const navigation = useNavigation();

  const {branchId} = route.params //pyq[0].Branch[0]

  const data = pyq[0].Branch.find(branch =>branch.id ===branchId)

  return (
    <ScrollView>
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
        {data.Semester.map(semName => {
          return (
            <TouchableOpacity onPress={()=>navigation.navigate('PyqData_sub',{semIndex:semName.id ,branchId: branchId})}
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
    </ScrollView>
  );
};

export default PyqData_Sem;
