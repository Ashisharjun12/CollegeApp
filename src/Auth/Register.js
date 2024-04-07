import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import Octicons from 'react-native-vector-icons/Octicons';
import Button from '../Common/Button';
import { useContext } from 'react';
import AppwriteContext from '../Appwrite/AppwriteContex';

const Register = () => {
  const [firstName ,SetfirstName]=useState()
  const [email ,Setemail]=useState()
  const [password ,Setpassword]=useState()

  const navigation = useNavigation();
  
  const {appwrite,setIsLoggedIn}=useContext(AppwriteContext)
const handelsub =async()=>{
  const data = {
   
    email,
    password,
    name: firstName
  }
  
   await appwrite.createAccount(data).then((response) => {
    if (response) {
      setIsLoggedIn(true);
      Snackbar.show({
        text: 'Signup success',
        duration: Snackbar.LENGTH_LONG,
      });
    }
  });
  
  
  
}

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : null}
    style={{ flex: 1 }}
  >
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{backgroundColor: '#FDD7C2', height: '100%'}}>
        <View
          style={{
            width: responsiveWidth(100),
            backgroundColor: 'white',
            height: responsiveHeight(100)
          
          }}>
          <View style={{marginTop: responsiveHeight(2)}}>
            <Text
              style={{
                fontSize: responsiveFontSize(4),
                color: '#535353',
                fontWeight: 'bold',
                marginTop: responsiveHeight(2),
                marginLeft: responsiveWidth(12),
              }}>
              Sign Up
            </Text>

            <View
              style={{
                marginTop: responsiveHeight(4),
                marginBottom: responsiveHeight(2),
              }}>
              {/* First Name */}
              <Text
                style={{
                  color: 'black',
                  fontSize: responsiveFontSize(2.5),
                  fontWeight: '500',
                  marginLeft: responsiveWidth(15),
                  marginBottom: responsiveHeight(2),
                }}>
                First Name
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: responsiveWidth(85),
                  height: responsiveHeight(6.5),
                  paddingHorizontal: responsiveWidth(10),
                  backgroundColor: '#F0F3F1',
                  borderRadius: 40,
                  gap: responsiveWidth(4),
                  marginLeft: responsiveWidth(8.3),
                }}>
                <Octicons name="person" color="#535353" size={21} />

                <TextInput
                  style={{
                    fontSize: responsiveFontSize(2.3),
                    textAlign: 'left',
                    alignSelf: 'center',
                  }}
                  placeholder="First Name"
                  value={firstName}
                  onChangeText={txt =>SetfirstName(txt)}
                />
              </View>

              {/* Last Name*/}

              <Text
                style={{
                  color: 'black',
                  fontSize: responsiveFontSize(2.5),
                  fontWeight: '500',
                  marginLeft: responsiveWidth(15),
                  marginBottom: responsiveHeight(2),
                  marginTop: responsiveHeight(3),
                }}>
                Last Name
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: responsiveWidth(85),
                  height: responsiveHeight(6.5),
                  paddingHorizontal: responsiveWidth(10),
                  backgroundColor: '#F0F3F1',
                  borderRadius: 40,
                  gap: responsiveWidth(4),
                  marginLeft: responsiveWidth(8.3),
                }}>
                <Octicons name="person" color="#535353" size={21} />

                <TextInput
                  style={{
                    fontSize: responsiveFontSize(2.3),
                    textAlign: 'left',
                    alignSelf: 'center',
                  }}
                  placeholder="Last Name"
                />
              </View>

              {/* Email  */}

              <Text
                style={{
                  color: 'black',
                  fontSize: responsiveFontSize(2.5),
                  fontWeight: '500',
                  marginLeft: responsiveWidth(15),
                  marginBottom: responsiveHeight(2),
                  marginTop: responsiveHeight(3),
                }}>
                Email
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: responsiveWidth(85),
                  height: responsiveHeight(6.5),
                  paddingHorizontal: responsiveWidth(10),
                  backgroundColor: '#F0F3F1',
                  borderRadius: 40,
                  gap: responsiveWidth(4),
                  marginLeft: responsiveWidth(8.3),
                }}>
                <Octicons name="mail" color="#535353" size={21} />

                <TextInput
                  style={{
                    fontSize: responsiveFontSize(2.3),
                    textAlign: 'left',
                    alignSelf: 'center',
                  }}
                  placeholder="college21@gmail.com"
                  value={email}
                  onChangeText={txt =>Setemail(txt)}
                />
              </View>

              {/* Password */}
              <Text
                style={{
                  color: 'black',
                  fontSize: responsiveFontSize(2.5),
                  fontWeight: '500',
                  marginLeft: responsiveWidth(15),
                  marginBottom: responsiveHeight(2),
                  marginTop: responsiveHeight(3),
                }}>
                Password
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: responsiveWidth(85),
                  height: responsiveHeight(6.5),
                  paddingHorizontal: responsiveWidth(10),
                  backgroundColor: '#F0F3F1',
                  borderRadius: 40,
                  gap: responsiveWidth(4),
                  marginLeft: responsiveWidth(8.3),
                }}>
                <Octicons name="lock" color="#535353" size={21} />

                <TextInput
                  style={{
                    fontSize: responsiveFontSize(2.3),
                    textAlign: 'left',
                    alignSelf: 'center',
                  }}
                  placeholder="Password"
                  value={password}
                  onChangeText={txt =>Setpassword(txt)}
                />
              </View>
            </View>
          </View>
                  <TouchableOpacity onPress={handelsub}>
                  <Button  name={'Sign Up'} />
                  </TouchableOpacity>
        

          <View style={{marginTop: responsiveHeight(3),marginBottom:responsiveHeight(2)}}>
            <Text
              style={{
                fontSize: responsiveFontSize(2.6),
                color: '#535353',
                fontWeight: 'bold',
                alignSelf: 'center',
              }}>
              {' '}
              Or
            </Text>
          </View>
          <View style={{flexDirection:'row',alignSelf:'center',gap:15}}>
            {/* google */}
            <TouchableOpacity
              style={{
                
                width: responsiveHeight(7),
                height: responsiveHeight(7),
                backgroundColor: '#F0F3F1',
                borderRadius: 66,
                alignItems:'center',
                justifyContent:'center'
              }}>
              <Image
                style={{
                  width: responsiveHeight(4.2),
                  height: responsiveHeight(4.2),
                }}
                source={require('../Image/google.png')}
              />
            </TouchableOpacity>
            {/* facebook */}
            <TouchableOpacity 
              style={{
                alignSelf:'center',
                width: responsiveHeight(7),
                height: responsiveHeight(7),
                backgroundColor: '#F0F3F1',
                borderRadius: 66,
                alignItems:'center',
                justifyContent:'center'
              }}>
              <Image
                style={{
                  width: responsiveHeight(4.2),
                  height: responsiveHeight(4.2),
                }}
                source={require('../Image/facebook.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register;
