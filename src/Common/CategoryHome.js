import { View, Text } from 'react-native'
import React from 'react'
import CommonCategory from '../Category/CommonCategory'
import {useNavigation} from '@react-navigation/native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
  } from 'react-native-responsive-dimensions';

const CategoryHome = () => {

    const navigation = useNavigation();
  return (
    <View>
          <View
            style={{
              flexDirection: 'row',
              gap: responsiveWidth(3),
              marginBottom: responsiveHeight(1),
            }}>
            <CommonCategory
              name={'Semester'}
              bgcolor="#2EB872"
              image={require('../Image/sem.png')}
              imageStyle={{width: responsiveWidth(40)}}
              screen="Semester"
              navigation={navigation}
            />

            <CommonCategory
              name={'Syllabus'}
              bgcolor="#FA7070"
              image={require('../Image/syllabus.png')}
              imageStyle={{width: responsiveWidth(40)}}
              screen="Syllabus"
              navigation={navigation}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              gap: responsiveWidth(3),
              marginTop: responsiveHeight(1),
            }}>
            <CommonCategory
              name={'Portal'}
              bgcolor="#FF9800"
              image={require('../Image/webportal.png')}
              imageStyle={{width: responsiveWidth(34),marginLeft:responsiveWidth(5)}}
              screen="Portal"
              navigation={navigation}
            />
            <CommonCategory
              name={'University'}
              bgcolor="#378CE7"
              image={require('../Image/university.png')}
              imageStyle={{width: responsiveWidth(34),marginLeft:responsiveWidth(5)}}
              screen="University"
              navigation={navigation}
            />
          </View>
        
        </View>
  )
}

export default CategoryHome