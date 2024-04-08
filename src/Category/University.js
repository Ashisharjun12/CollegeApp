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

const University = () => {
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
            University
          </Text>
        </View>

        <ImageCard image={require('../Image/semBanner.png')}  bgColor={'#008DDA'}/>

        {/* University Category */}

        <View style={{marginBottom: responsiveHeight(3)}}>
          <Text
            style={{
              fontSize: responsiveFontSize(2.7),
              color: 'black',
              fontWeight: 'bold',
             marginLeft:responsiveWidth(5)
            }}>
            University Category
          </Text>
        </View>

        {/* Universsity category card */}

        <Card
          name={'Beu Colleges'}
          navigation={navigation}
          screen={'UniversityData'}
          image={require('../Image/pyq.png')}
          cardStyle={{marginBottom: responsiveHeight(3),gap:responsiveWidth(10)}}
          bgColor="#40A2E3"
          shadowClr="blue"
        />

        <Card
          name={'Form FillUp'}
          navigation={navigation}
          screen={'Holiday'}
          image={require('../Image/holiday.png')}
          cardStyle={{
            marginBottom: responsiveHeight(3),
            gap: responsiveWidth(10),
          }}
          bgColor="#F7C566"
          shadowClr="#FE7A36"
        />
        <Card
          name={'Beu Notice'}
          navigation={navigation}
          screen={'BeuResult'}
          image={require('../Image/result.png')}
          cardStyle={{
            marginBottom: responsiveHeight(3),
            gap: responsiveWidth(11),
          }}
          bgColor="#74E291"
          shadowClr="green"
        />
        <Card
          name={'Beu News'}
          navigation={navigation}
          screen={'BeuResult'}
          image={require('../Image/result.png')}
          cardStyle={{
            marginBottom: responsiveHeight(3),
            gap: responsiveWidth(11),
          }}
          bgColor="#EC7272"
          shadowClr="red"
        />
      </View>
    </ScrollView>
  );
};

export default University;
