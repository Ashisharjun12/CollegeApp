import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import GoBack from '../Common/GoBack';
import CommonCategory from '../Category/CommonCategory';

const AllCategory = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{backgroundColor: '#ECEDF2', height: '100%'}}>
      <View
        style={{
          marginLeft: responsiveWidth(4),
          marginRight: responsiveWidth(4),
          marginBottom: responsiveHeight(2),
        }}>
        <GoBack />
        <View
          style={{
            marginLeft: responsiveWidth(9),
            marginTop: responsiveHeight(1),
            marginBottom: responsiveHeight(3),
          }}>
          <Text
            style={{
              fontSize: responsiveFontSize(2.7),
              color: 'black',
              fontWeight: 'bold',
            }}>
            All Categories
          </Text>
        </View>
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
            imageStyle={{
              width: responsiveWidth(34),
              marginLeft: responsiveWidth(5),
            }}
            screen="Portal"
            navigation={navigation}
          />
          <CommonCategory
            name={'University'}
            bgcolor="#378CE7"
            image={require('../Image/university.png')}
            imageStyle={{ width: responsiveWidth(34),
                marginLeft: responsiveWidth(8)}}
            screen="University"
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
            name={'Library'}
            bgcolor="#2EB872"
            image={require('../Image/sem.png')}
            imageStyle={{width: responsiveWidth(40)}}
            screen="Library"
            navigation={navigation}
          />
          <CommonCategory
            name={'Campus'}
            bgcolor="#FF6969"
            image={require('../Image/sem.png')}
            imageStyle={{width: responsiveWidth(40)}}
            screen="Campus"
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
            name={'Merchandise'}
            bgcolor="#FF9800"
            image={require('../Image/sem.png')}
            imageStyle={{width: responsiveWidth(40)}}
            screen="Merch"
            navigation={navigation}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default AllCategory;
