import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import GoBack from '../../Common/GoBack';
import Book from '../../Json/Library.json';
import HalfCircle from '../../Common/HalfCircle';

const SelfHelp = () => {
  const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: '#ECEDF2', flex: 1 }}>
      <GoBack />
      <View
        style={{
          marginLeft: responsiveWidth(9),
          marginRight: responsiveWidth(7),
          marginTop: responsiveHeight(1),
          marginBottom: responsiveHeight(3),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text
          style={{
            fontSize: responsiveFontSize(2.7),
            color: 'black',
            fontWeight: 'bold',
            alignSelf:'center'
          }}
        >
          Self Help Books
        </Text>

       
      </View>

      <FlatList
        data={Book[0].Books[0].Spritual}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={()=>navigation.navigate('ViewSelfHelp',{url:item.url} ,{name :item.Name})}
           style={{ marginRight: responsiveWidth(2), padding: 2,marginLeft:responsiveWidth(4),marginTop:responsiveHeight(2) }}>
            <HalfCircle />
            <Image
              style={{ resizeMode: 'contain', width: responsiveWidth(40), height: responsiveHeight(20), borderRadius: 10, marginRight: responsiveWidth(1) }}
              source={{ uri: item.Book_Img }}
            />
            <Text style={{ color: 'black', fontSize: responsiveFontSize(2.5), alignSelf: 'center', marginTop: responsiveHeight(2.5), fontWeight: '500' }}>{item.Name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ marginLeft: responsiveWidth(2), marginRight: responsiveWidth(2) }}
      />
    </View>
  );
};

export default SelfHelp;
