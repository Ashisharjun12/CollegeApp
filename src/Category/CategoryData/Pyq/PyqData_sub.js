import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import pyq from '../../../Json/Pyq.json';
import GoBack from '../../../Common/GoBack';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Feather from 'react-native-vector-icons/Feather';

const PyqData_sub = ({ route }) => {


  
  const navigation = useNavigation();
  const { semIndex ,branchId } = route.params;
  const [searchQuery, setSearchQuery] = useState('');

 
  
  // Filter subjects based on search query
  const filteredSubjects = pyq[0].Branch.find(id =>id.id ===branchId).Semester.find(sem => sem.id === semIndex).Subject.filter(sub =>
    sub.Sub_Name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ScrollView>
      <View>
        <GoBack />
        <View style={{ marginBottom: responsiveHeight(3) }}>
          <Text
            style={{
              fontSize: responsiveFontSize(2.7),
              color: 'black',
              fontWeight: 'bold',
              alignSelf: 'center',
            }}>
            Choose Your Subject
          </Text>
         
        </View>
         {/* Search and Trxt Input */}

         <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: responsiveHeight(2),
            marginBottom: responsiveHeight(2.5),
            marginLeft:responsiveWidth(4),
            marginRight:responsiveWidth(4),
            backgroundColor: 'white',
            borderRadius: 11,
            paddingVertical: responsiveHeight(0.5),
            paddingHorizontal: responsiveWidth(7),
          }}>
          <TextInput
            style={{
              flex: 1,
              marginLeft: responsiveWidth(4),
              fontSize: responsiveFontSize(2.3),
              color: 'black',
              
            }}
            placeholderTextColor={"black"}
            placeholder="Search Subjects..."
            onChangeText={text => setSearchQuery(text)}
            value={searchQuery}
          />

          <Feather name="search" color="#535353" size={30} />
        </View>
        <View>
          {filteredSubjects.map(sub => (
            <TouchableOpacity
              onPress={() => navigation.navigate('PyqData_year',{subject :sub})}
              key={sub.id}
              style={{
                marginBottom: responsiveHeight(2.5),
                width: responsiveWidth(93),
                height: responsiveHeight(13),
                backgroundColor: '#74E291',
                alignSelf: 'center',
                borderRadius: 17,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: responsiveWidth(15),
                shadowColor: '#green',
                shadowOpacity: 0.25,
                shadowRadius: 29,
                elevation: 5,
              }}>
              <Image
                style={{
                  resizeMode: 'contain',
                  width: responsiveWidth(21),
                  height: responsiveHeight(8.5),
                }}
                source={{ uri: sub.Sub_Img }}
              />
              <Text
                style={{
                  fontSize: responsiveFontSize(2.5),
                  color: 'black',
                  fontWeight: 'bold',
                }}>
                {sub.Sub_Name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default PyqData_sub;
