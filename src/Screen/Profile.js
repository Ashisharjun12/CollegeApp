import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import share from 'react-native-share';
import Button from '../Common/Button';

const Profile = () => {
  const navigation = useNavigation();

  const ShareApp = async () => {
    const options = {
      message: 'DownLoad The BeuOne App And Join Us.',
      url: 'https://play.google.com/store/apps?hl=en_IN&gl=US',
    };
    try {
      const res = await share.open(options);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const reportIssue = () => {
    const email = 'ashishrahul748@gmailcom';
    const subject = 'Bug Report';
    const body = 'Please describe the issue you encountered:\n\n\n';

    const mailTo = `mailto:${email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    Linking.openURL(mailTo);
  };

  return (
    <View>
      {/* profile */}
     

      <View
        style={{
          width: responsiveWidth(100),
          height: responsiveHeight(34),
          backgroundColor: 'black',
          borderBottomRightRadius: 23,
          borderBottomLeftRadius: 23,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: responsiveHeight(7),
          }}>
          <Image
            style={{width: responsiveWidth(33.4), height: responsiveHeight(15)}}
            source={require('../Image/avtar.png')}
          />
        </View>

        <Text
          style={{
            color: 'white',
            alignSelf: 'center',
            fontSize: responsiveFontSize(3),
            fontWeight: '500',
            marginTop: responsiveHeight(2.5),
          }}>
          Hey, Ashish
        </Text>
      </View>

      {/* function */}
      <View>
        <View
          style={{
            marginTop: responsiveHeight(4),
            marginLeft: responsiveWidth(6),
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: responsiveWidth(7),
            }}>
            <Ionicons name="mail-outline" color={'black'} size={45} />
            <Text
              style={{
                fontSize: responsiveFontSize(2.3),
                color: 'black',
                fontWeight: '500',
              }}>
              ashishrahul748@gmail.com
            </Text>
          </View>
        </View>
        <View
          style={{
            width: responsiveWidth(100),
            height: responsiveHeight(0.3),
            backgroundColor: '#B2B2B2',
            alignSelf: 'center',
            marginTop: responsiveHeight(1),
          }}></View>
      </View>

      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('ApplyEvent')}
          style={{
            marginTop: responsiveHeight(4),
            marginLeft: responsiveWidth(6),
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: responsiveWidth(7),
            }}>
            <SimpleLineIcons name="event" color={'black'} size={42} />
            <Text
              style={{
                fontSize: responsiveFontSize(2.3),
                color: 'black',
                fontWeight: '500',
              }}>
              Your Events
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            width: responsiveWidth(100),
            height: responsiveHeight(0.3),
            backgroundColor: '#B2B2B2',
            alignSelf: 'center',
            marginTop: responsiveHeight(1),
          }}></View>
      </View>

      <View>
        <TouchableOpacity
          onPress={ShareApp}
          style={{
            marginTop: responsiveHeight(2.8),
            marginLeft: responsiveWidth(6),
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: responsiveWidth(7),
            }}>
            <EvilIcons
              style={{marginBottom: responsiveHeight(1)}}
              name="share-google"
              color={'black'}
              size={48}
            />
            <Text
              style={{
                fontSize: responsiveFontSize(2.3),
                color: 'black',
                fontWeight: '500',
              }}>
              Share App
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            width: responsiveWidth(100),
            height: responsiveHeight(0.3),
            backgroundColor: '#B2B2B2',
            alignSelf: 'center',
            marginTop: responsiveHeight(1),
          }}></View>
      </View>
      <View>
        <TouchableOpacity
          onPress={reportIssue}
          style={{
            marginTop: responsiveHeight(2.8),
            marginLeft: responsiveWidth(6),
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: responsiveWidth(7),
            }}>
            <Ionicons
              style={{marginBottom: responsiveHeight(1)}}
              name="bug-outline"
              color={'black'}
              size={44}
            />
            <Text
              style={{
                fontSize: responsiveFontSize(2.3),
                color: 'black',
                fontWeight: '500',
              }}>
              Report Issue
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            width: responsiveWidth(100),
            height: responsiveHeight(0.3),
            backgroundColor: '#B2B2B2',
            alignSelf: 'center',
            marginTop: responsiveHeight(1),
          }}></View>
      </View>
      <View>
        <View
          
          style={{
            marginTop: responsiveHeight(2.8),
            marginLeft: responsiveWidth(6),
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: responsiveWidth(7),
            }}>
            <Ionicons
              style={{marginBottom: responsiveHeight(1)}}
              name="git-compare-outline"
              color={'black'}
              size={42}
            />
            <Text
              style={{
                fontSize: responsiveFontSize(2.3),
                color: 'black',
                fontWeight: '500',
              }}>
              Version v0.0.1
            </Text>
          </View>
        </View>
        <View
          style={{
            width: responsiveWidth(100),
            height: responsiveHeight(0.3),
            backgroundColor: '#B2B2B2',
            alignSelf: 'center',
            marginTop: responsiveHeight(1),
          }}></View>
      </View>
      <TouchableOpacity onPress={console.log('LoutOut')}>
        <Button
          name={'Logout'}
          stylebtn={{width: responsiveWidth(92)}}
          textStyle={{fontSize: responsiveFontSize(3)}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
