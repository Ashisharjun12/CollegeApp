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

const Semester = () => {
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
            Semester Prepration
          </Text>
        </View>

        <ImageCard image={require('../Image/semBanner.png')} />

        {/* Semester prep Category */}

        <View style={{marginBottom: responsiveHeight(3)}}>
          <Text
            style={{
              fontSize: responsiveFontSize(2.7),
              color: 'black',
              fontWeight: 'bold',
              alignSelf: 'center',
            }}>
            Semester Prepration Category
          </Text>
        </View>

        {/* semester category card */}

        <Card
          name={'Previous Year Question'}
          navigation={navigation}
          screen={'PyqData'}
          image={require('../Image/pyq.png')}
          cardStyle={{marginBottom: responsiveHeight(3)}}
          shadowClr="green"
        />

        <Card
          name={'College Holiday'}
          navigation={navigation}
          screen={'Holiday'}
          image={require('../Image/holiday.png')}
          cardStyle={{
            marginBottom: responsiveHeight(3),
            gap: responsiveWidth(17),
          }}
          bgColor="#F7C566"
          shadowClr="#FE7A36"
        />

        <Card
          name={'Beu  Result'}
          navigation={navigation}
          screen={'BeuResult'}
          image={require('../Image/result.png')}
          cardStyle={{
            marginBottom: responsiveHeight(3),
            gap: responsiveWidth(12),
          }}
          bgColor="#86B6F6"
          shadowClr="#3559E0"
        />
      </View>
    </ScrollView>
  );
};

export default Semester;
