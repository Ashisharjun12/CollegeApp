import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AppwriteContext from '../Appwrite/AppwriteContex';
import {useContext} from 'react';
import CommonCategory from '../Category/CommonCategory';

const Home = () => {
  const navigation = useNavigation();

  const {appwrite, setCurrentuserinfo, currentuserinfo} =
    useContext(AppwriteContext);

  const getuser = async () => {
    const user = await appwrite.getCurrentUser();
    setCurrentuserinfo(user);
    console.log(user);
  };

  getuser();

  return (
    <ScrollView style={{backgroundColor: '#ECEDF2', height: '100%'}}>
      <View
        style={{
          marginLeft: responsiveWidth(4),
          marginRight: responsiveWidth(4),
          marginBottom: responsiveHeight(2),
        }}>
        {/* Top */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: responsiveHeight(1),
          }}>
          <View
            style={{
              width: responsiveWidth(20),
              height: responsiveWidth(20),
              borderRadius: 78,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{width: responsiveWidth(18), height: responsiveHeight(8)}}
              source={require('../Image/avtar.png')}
            />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
            <Ionicons name="notifications-outline" color={'black'} size={38} />
          </TouchableOpacity>
        </View>

        {/* text */}
        <View>
          <Text
            style={{
              color: 'black',
              fontSize: responsiveFontSize(3),
              fontWeight: '500',
              marginTop: responsiveHeight(3),
            }}>
            Hey , ashish
          </Text>
          <Text
            style={{
              fontSize: responsiveFontSize(2.6),
              fontWeight: '400',
              color: 'black',
              marginTop: responsiveHeight(2),
            }}>
            Find What You Want affortable{' '}
          </Text>
        </View>

        {/* Search and Trxt Input */}

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: responsiveHeight(4),
            marginBottom: responsiveHeight(2),
            backgroundColor: 'white',
            borderRadius: 11,
            paddingVertical: responsiveHeight(0.5),
            paddingHorizontal: responsiveWidth(5),
          }}>
          <TextInput
            style={{
              flex: 1,
              marginLeft: responsiveWidth(4),
              fontSize: responsiveFontSize(2.3),
              color: 'black'
            }}
            placeholder="Search AnyThing"
          />

          <Feather name="search" color="#535353" size={30} />
        </View>

        {/* Explore Categories */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: responsiveFontSize(2.8),
              marginLeft: responsiveWidth(2.5),
              marginBottom: responsiveHeight(2.5),
              fontWeight: 'bold',
              fontFamily:'Segoe UI'
            }}>
            Explore Categories
          </Text>

          <View
            style={{
              backgroundColor: 'black',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 9,
              borderRadius:9,
              marginBottom: responsiveHeight(2),
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: responsiveFontSize(1.8),
                fontWeight: '500'
              
              }}>
              View more
            </Text>
          </View>
        </View>

        {/* All Categories */}

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
              image={require('../Image/sem.png')}
              imageStyle={{width: responsiveWidth(40)}}
              screen="Portal"
              navigation={navigation}
            />
            <CommonCategory
              name={'University'}
              bgcolor="#378CE7"
              image={require('../Image/sem.png')}
              imageStyle={{width: responsiveWidth(40)}}
              screen="University"
              navigation={navigation}
            />
          </View>
        
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
