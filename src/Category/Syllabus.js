import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import Card from '../Common/Card';
import GoBack from '../Common/GoBack';
import ImageCard from '../Common/ImageCard';

const Syllabus = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{backgroundColor: '#ECEDF2', height: '100%'}}>
      <View
        style={{
          marginLeft: responsiveWidth(4),
          marginRight: responsiveWidth(4),
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
            Syllabus Data
          </Text>
        </View>

        <ImageCard image={require('../Image/semBanner.png')} bgColor={'#FA7070'} />

        {/* Semester Syllabus Category */}

        <View style={{marginBottom: responsiveHeight(3)}}>
          <Text
            style={{
              fontSize: responsiveFontSize(2.7),
              color: 'black',
              fontWeight: 'bold',
              marginLeft:responsiveWidth(6)
            }}>
            Syllabus Data Category
          </Text>
        </View>

        {/* syllabus
        ]/ category card */}

        <Card
          name={'Bachleor Of Technology'}
          navigation={navigation}
          screen={'Btech'}
          image={require('../Image/pyq.png')}
          cardStyle={{marginBottom: responsiveHeight(3)}}
          shadowClr="red"
          bgColor={'#F28585'}
        />

        <Card
          name={'ESE / IES Exam'}
          navigation={navigation}
          screen={'Holiday'}
          image={require('../Image/holiday.png')}
          cardStyle={{
            marginBottom: responsiveHeight(3),
            
          }}
          bgColor="#86B6F6"
          shadowClr="blue"
        />

        <Card
          name={'Gate Exam'}
          navigation={navigation}
          screen={'BeuResult'}
          image={require('../Image/result.png')}
          cardStyle={{
            marginBottom: responsiveHeight(3),
            gap: responsiveWidth(12),
          }}
          bgColor="#74E291"
          shadowClr="green"
        />
      </View>
    </ScrollView>
  );
};

export default Syllabus;
