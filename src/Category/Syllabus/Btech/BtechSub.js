import {View, Text, TouchableOpacity, Image,ScrollView} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import BtechJson from '../../../Json/BtechJson.json';
import GoBack from '../../../Common/GoBack';

const BtechSub = ({route}) => {

 
  const navigation = useNavigation();

  const {semId,branchId} =route.params

  return (
    <ScrollView>
      <GoBack style={{marginLeft:responsiveWidth(7)}}/>
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

      {BtechJson[0].Branch.find(id =>id.id ===branchId).Semester.find(id =>id.id===semId).subjects.map((subName)=>{
        return( 
            <TouchableOpacity
              key={subName.id}
              onPress={() => navigation.navigate('BtechModule' ,{url:subName.Pdf_url})}
              style={{
                marginBottom:responsiveHeight(2.5),
                width: responsiveWidth(93),
                height: responsiveHeight(13),
                backgroundColor: '#15F5BA',
                alignSelf: 'center',
                borderRadius: 17,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: responsiveWidth(12),
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
                source={{uri: subName.Subject_Img}}
              />

              <Text
                style={{
                  fontSize: responsiveFontSize(2.5),
                  color: 'black',
                  fontWeight: 'bold',
                }}>
                {subName.Subject_Name}
              </Text>
            </TouchableOpacity>
          )
        })}
         
     
      </View>
    </ScrollView>
  );
};

export default BtechSub;
