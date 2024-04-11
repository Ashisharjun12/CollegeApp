import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import GoBack from '../Common/GoBack';
import Book from '../Json/Library.json';
import HalfCircle from '../Common/HalfCircle';

const Library = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{backgroundColor: '#ECEDF2', height: '100%'}}>
      <View
        style={{
          marginLeft: responsiveWidth(3),
          marginRight: responsiveWidth(3),
        }}>
        <GoBack />

        {/* self help book */}

        <View>
        <View
          style={{
            marginLeft: responsiveWidth(9),
            marginRight: responsiveWidth(7),
            marginTop: responsiveHeight(1),
            marginBottom: responsiveHeight(3),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: responsiveFontSize(2.7),
              color: 'black',
              fontWeight: 'bold',
            }}>
            Self Help
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate('SelfHelp')}>
            <Text
              style={{
                color: 'black',
                fontSize: responsiveFontSize(2.1),
                fontWeight: '500',
              }}>
              View All
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={Book[0].Books[0].Spritual}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ViewSelfHelp', {url: item.url})
              }
              style={{marginRight: responsiveWidth(1), padding: 2}}>
              <HalfCircle />
              <Image
                style={{
                  resizeMode: 'contain',
                  width: responsiveWidth(40),
                  height: responsiveHeight(20),
                  borderRadius: 10,
                  marginRight: responsiveWidth(1),
                }}
                source={{uri: item.Book_Img}}
              />

              <Text
                style={{
                  color: 'black',
                  fontSize: responsiveFontSize(2.5),
                  alignSelf: 'center',
                  marginTop: responsiveHeight(2.5),
                  fontWeight: '500',
                }}>
                {item.Name}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{
            marginLeft: responsiveWidth(2),
            marginRight: responsiveWidth(2),
          }}
        />

        </View>
       

        {/* Famous Books */}

        <View>
          <View
            style={{
              marginLeft: responsiveWidth(9),
              marginRight: responsiveWidth(7),
              marginTop: responsiveHeight(3.8),
              marginBottom: responsiveHeight(3),
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: responsiveFontSize(2.7),
                color: 'black',
                fontWeight: 'bold',
              }}>
              Trending Books
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate('FamousBook')}>
              <Text
                style={{
                  color: 'black',
                  fontSize: responsiveFontSize(2.1),
                  fontWeight: '500',
                }}>
                View All
              </Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={Book[0].Books[1].Famous}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ViewSelfHelp', {url: item.url})
                }
                style={{marginRight: responsiveWidth(1), padding: 2}}>
                <HalfCircle />
                <Image
                  style={{
                    resizeMode: 'contain',
                    width: responsiveWidth(40),
                    height: responsiveHeight(20),
                    borderRadius: 10,
                    marginRight: responsiveWidth(1),
                  }}
                  source={{uri: item.Book_Img}}
                />

                <Text
                  style={{
                    padding:2,
                    color: 'black',
                    fontSize: responsiveFontSize(2.3),
                    alignSelf: 'center',
                    marginTop: responsiveHeight(2.5),
                    fontWeight: '500',
                  }}>
                  {item.Name}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={{
              marginLeft: responsiveWidth(2),
              marginRight: responsiveWidth(2),
            }}
          />
        </View>


        {/*  College Books */}

        <View>
          <View
            style={{
              marginLeft: responsiveWidth(9),
              marginRight: responsiveWidth(7),
              marginTop: responsiveHeight(3.8),
              marginBottom: responsiveHeight(3),
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: responsiveFontSize(2.7),
                color: 'black',
                fontWeight: 'bold',
              }}>
              Biography
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate('Biography')}>
              <Text
                style={{
                  color: 'black',
                  fontSize: responsiveFontSize(2.1),
                  fontWeight: '500',
                }}>
                View All
              </Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={Book[0].Books[2].Biography}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ViewSelfHelp', {url: item.url})
                }
                style={{marginRight: responsiveWidth(1), padding: 2}}>
                <HalfCircle />
                <Image
                  style={{
                    resizeMode: 'contain',
                    width: responsiveWidth(40),
                    height: responsiveHeight(20),
                    borderRadius: 10,
                    marginRight: responsiveWidth(1),
                  }}
                  source={{uri: item.Book_Img}}
                />

                <Text
                  style={{
                    padding:2,
                    color: 'black',
                    fontSize: responsiveFontSize(2.3),
                    alignSelf: 'center',
                    marginTop: responsiveHeight(2.5),
                    fontWeight: '500',
                  }}>
                  {item.Name}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={{
              marginLeft: responsiveWidth(2),
              marginRight: responsiveWidth(2),
            }}
          />
        </View>


      </View>
    </ScrollView>
  );
};

export default Library;
