import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import BtechJson from '../../../Json/BtechJson.json';
import GoBack from '../../../Common/GoBack';

const BtechSem = ({route}) => {
  const navigation = useNavigation();
  const {branchId} = route.params
  
  

  return (
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
            Choose Your Semester
          </Text>
        </View>
      <View>

      {BtechJson[0].Branch.find(id => id.id ===branchId).Semester.map((semester)=>{
        return( 
            <TouchableOpacity
              key={semester.id}
              onPress={() => navigation.navigate('BtechSub',{semId :semester.id ,branchId:branchId})}
              style={{
                marginBottom:responsiveHeight(2.5),
                width: responsiveWidth(93),
                height: responsiveHeight(13),
                backgroundColor: '#ABD4C1',
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
                source={require('../../../Image/semester.png')}
              />

              <Text
                style={{
                  fontSize: responsiveFontSize(2.5),
                  color: 'black',
                  fontWeight: 'bold',
                }}>
                {semester.sem}
              </Text>
            </TouchableOpacity>
          )
        })}
         
     
      </View>
    </View>
  );
};

export default BtechSem;
