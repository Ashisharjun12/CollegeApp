import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Pressable
} from 'react-native';
import React, {useState,useContext, useEffect} from 'react';
import {AppwriteContex} from '../Appwrite/AppwriteContex'

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import CategoryHome from '../Common/CategoryHome';



const Home = () => {
 

  const navigation = useNavigation();

  const [userData ,setUserData] = useState({})

  const {appwrite } = useContext(AppwriteContex)


  const dataFetch = async()=>{
    const data = await appwrite.getCurrentUser()
         setUserData(data)

  }


useEffect(()=>{
     
    dataFetch()
},[appwrite])


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
              <View style={{backgroundColor:'#FB6D48',padding:2.8 ,borderRadius:99}}>
            <Image
              style={{width: responsiveWidth(18), height: responsiveHeight(8.3),borderRadius:99}}
              source={require('../Image/avtar.png')}
            />
            </View>
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
            Hey , {userData.name}
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
             
            }}>
            Explore Categories
          </Text>

          <Pressable   onPress={()=>navigation.navigate('AllCategory')}
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
          </Pressable>
        </View>

        {/* All Categories */}

       <View>
        <CategoryHome/>
       </View>
      </View>
    </ScrollView>
  );
};

export default Home;
