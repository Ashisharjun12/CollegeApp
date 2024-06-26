import React, { useState ,useContext} from 'react';
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
import { useNavigation } from '@react-navigation/native';
import Octicons from 'react-native-vector-icons/Octicons';
import Button from '../Common/Button';
import Snackbar from 'react-native-snackbar'
import {AppwriteContex} from '../Appwrite/AppwriteContex'
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';




const Login = () => {

  const {appwrite ,setIsLoggedIn} = useContext(AppwriteContex)
  const navigation = useNavigation();

  const [ email ,setEmail ] = useState()
  const [ password ,setPassword] = useState()

  const handleLogin = () =>{
     const user = {
      email ,
      password
     }

     appwrite.login(user)
        .then((response)=>{
          if (response) {
            setIsLoggedIn(true)
            Snackbar.show({
              text:'Login SuccessFully!',
              duration:Snackbar.LENGTH_SHORT
            })
          }
         

        })
        .catch(e => {
          console.log(e)
         setEmail("Incorrect Email or Password")
        })
  }



  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ backgroundColor: '#FDD7C2', flex: 1 }}>
          <View style={{ marginTop: responsiveHeight(3) }}>
            <Image
              style={{
                width: responsiveWidth(94),
                height: responsiveHeight(36),
              }}
              source={require('../Image/sign.png')}
            />
          </View>
          <View
            style={{
              width: responsiveWidth(100),
              backgroundColor: 'white',
              borderTopRightRadius: 36,
              borderTopLeftRadius: 36,
              paddingHorizontal: responsiveWidth(6),
              paddingTop: responsiveHeight(4),
              flex: 1,
            }}
          >
            <Text
              style={{
                fontSize: responsiveFontSize(4),
                color: '#535353',
                fontWeight: 'bold',
                marginBottom: responsiveHeight(2),
              }}
            >
              Sign In
            </Text>

            <View style={{ marginBottom: responsiveHeight(2) }}>
              {/* Email */}
              <Text
                style={{
                  marginLeft:responsiveWidth(5.5),
                  color: 'black',
                  fontSize: responsiveFontSize(2.5),
                  fontWeight: '500',
                  marginBottom: responsiveHeight(2),
                }}
              >
                Email
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: responsiveHeight(2),
                  backgroundColor: '#F0F3F1',
                  borderRadius: 40,
                  paddingVertical: responsiveHeight(1),
                  paddingHorizontal: responsiveWidth(4),
                }}
              >
                <Octicons name="mail" color="#535353" size={21} />
                <TextInput
                  style={{
                    color:'black',
                    flex: 1,
                    marginLeft: responsiveWidth(4),
                    fontSize: responsiveFontSize(2.3),
                  }}
                  placeholderTextColor={"black"}
                  placeholder="johndoe@gmail.com"
                  value={email}
                  onChangeText={txt =>setEmail(txt)}
                />
              </View>

              {/* Password */}
              <Text
                style={{
                  marginLeft:responsiveWidth(5.5),
                  color: 'black',
                  fontSize: responsiveFontSize(2.5),
                  fontWeight: '500',
                  marginBottom: responsiveHeight(2),
                }}
              >
                Password
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: responsiveHeight(3),
                  backgroundColor: '#F0F3F1',
                  borderRadius: 40,
                  paddingVertical: responsiveHeight(1),
                  paddingHorizontal: responsiveWidth(4),
                }}
              >
                <Octicons name="lock" color="#535353" size={21} />
                <TextInput
                  style={{
                    color:'black',
                    flex: 1,
                    marginLeft: responsiveWidth(4),
                    fontSize: responsiveFontSize(2.3),
                  }}
                  placeholderTextColor={"black"}
                  placeholder="password"
                  value={password}
                  onChangeText={txt =>setPassword(txt)}
                  secureTextEntry={true}
                />
              </View>
            </View>
            <TouchableOpacity onPress={handleLogin}>
                  
            <Button name={'Login'} />
            </TouchableOpacity>


            <View style={{ flexDirection: 'row', marginTop: responsiveHeight(2),marginLeft:responsiveWidth(7.7) }}>
              <Text
                style={{
                  fontSize: responsiveFontSize(2.3),
                  color: '#535353',
                }}
              >
                Don't have an account ?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text
                  style={{
                    fontSize: responsiveFontSize(2.4),
                    color: 'black',
                    fontWeight: 'bold',
                    marginLeft: responsiveWidth(1),
                  }}
                >
                  Sign Up
                </Text>
              </TouchableOpacity>

             

              
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
