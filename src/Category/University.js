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
            Portals
          </Text>
        </View>

        <ImageCard image={require('../Image/semBanner.png')}  bgColor={'#F7A76C'}/>

        {/* University Category */}

        <View style={{marginBottom: responsiveHeight(3)}}>
          <Text
            style={{
              fontSize: responsiveFontSize(2.7),
              color: 'black',
              fontWeight: 'bold',
             marginLeft:responsiveWidth(5)
            }}>
            Portals Category
          </Text>
        </View>

        {/* Universsity category card */}

        <Card
          name={'Internship'}
          navigation={navigation}
          screen={'PyqData'}
          image={require('../Image/pyq.png')}
          cardStyle={{marginBottom: responsiveHeight(3),gap:responsiveWidth(24)}}
          bgColor="#F7A76C"
          shadowClr="orange"
        />

        <Card
          name={'Nptel'}
          navigation={navigation}
          screen={'Holiday'}
          image={require('../Image/holiday.png')}
          cardStyle={{
            marginBottom: responsiveHeight(3),
            gap: responsiveWidth(28),
          }}
          bgColor="#F7C566"
          shadowClr="#FE7A36"
        />

        <Card
          name={'PMS Online'}
          navigation={navigation}
          screen={'BeuResult'}
          image={require('../Image/result.png')}
          cardStyle={{
            marginBottom: responsiveHeight(3),
            gap: responsiveWidth(11),
          }}
          bgColor="#86B6F6"
          shadowClr="#3559E0"
        />
        <Card
          name={'Schlorship'}
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
          name={'Spoken Tutorial'}
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
