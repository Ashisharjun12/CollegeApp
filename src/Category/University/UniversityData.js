import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Linking,
  ScrollView,
  TextInput,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Feather from 'react-native-vector-icons/Feather';
import collegeData from '../../Json/College.json';
import GoBack from '../../Common/GoBack';

const UniversityData = () => {
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredColleges, setFilteredColleges] = useState([]);

  const handleWebsiteClick = website => {
    Linking.openURL(website);
  };

  // Filter colleges based on search query
  const handleSearch = query => {
    setSearchQuery(query);
    const filtered = collegeData.filter(college =>
      college.college_name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredColleges(filtered);
  };

  useEffect(() => {
    // Set the initial colleges to display
    setFilteredColleges(collegeData.slice(0, 15));
  }, []);

  return (
    <ScrollView style={{backgroundColor: '#ECEDF2', height: '100%'}}>
      <GoBack style={{ marginLeft: responsiveWidth(7) }} />
      <View style={{ marginBottom: responsiveHeight(3) }}>
        <Text
          style={{
            fontSize: responsiveFontSize(2.7),
            color: 'black',
            fontWeight: 'bold',
            alignSelf: 'center',
          }}>
          Visit Your College
        </Text>
      </View>
      <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: responsiveHeight(2),
            marginLeft:responsiveWidth(5),
            marginRight:responsiveWidth(5),
            marginBottom: responsiveHeight(4),
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
            placeholder="Search College..."
            value={searchQuery}
            onChangeText={handleSearch}
          />

          <Feather name="search" color="#535353" size={30} />
        </View>
      <View>
        {loading ? (
          <ActivityIndicator size="large" color="black" />
        ) : (
          filteredColleges.length > 0 &&
          filteredColleges.map(clg => (
            <TouchableOpacity
              key={clg.id}
              onPress={() => handleWebsiteClick(clg.website)}
              style={{
                marginBottom: responsiveHeight(2.5),
                width: responsiveWidth(93),
                height: responsiveHeight(8),
                paddingHorizontal: responsiveWidth(3),
                backgroundColor: '#537FE7',
                alignSelf: 'center',
                borderRadius: 13,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: responsiveWidth(5),
                shadowColor: 'blue',
                shadowOpacity: 1,
                shadowRadius: 29,
                elevation: 7,
              }}>
              <Text
                style={{
                  fontSize: responsiveFontSize(2.2),
                  color: 'white',
                  fontWeight: 'bold',
                }}>
                {clg.college_name}
              </Text>
            </TouchableOpacity>
          ))
        )}
      </View>
    </ScrollView>
  );
};

export default UniversityData;
