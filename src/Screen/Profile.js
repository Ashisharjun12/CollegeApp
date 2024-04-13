import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Modal from 'react-native-modal';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import share from 'react-native-share';
import Button from '../Common/Button';
import Snackbar from 'react-native-snackbar';
import {AppwriteContex} from '../Appwrite/AppwriteContex';
import DocumentPicker from 'react-native-document-picker';

const Profile = () => {
  const navigation = useNavigation();

  const [isVisible, setIsVisible] = useState(false);
  const [docsOpen, setDocsOpen] = useState(false);
  const [join ,setJoin] =useState(false)
  const [userData, setUserData] = useState({});

  const {selectImg,setSelectImg,appwrite, setIsLoggedIn} = useContext(AppwriteContex);

  const handleLogOut = () => {
    appwrite.logout().then(() => {
      setIsLoggedIn(false);
      Snackbar.show({
        text: 'LogOut SuccessFully!',
        duration: Snackbar.LENGTH_SHORT,        
      });
    });
  };

  const dataFetch = async () => {
    const data = await appwrite.getCurrentUser();

    setUserData(data);
  };
  useEffect(() => {
    dataFetch();
  }, [appwrite]);

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

  //select profile image

  // const [selectImg, setSelectImg] = useState();
  const selectDoc = async () => {
    try {
      const doc = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      setSelectImg(doc[0].uri);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      {/* profile */}

      <View
        style={{
          width: responsiveWidth(100),
          height: responsiveHeight(34),
          backgroundColor: 'black',
          borderBottomRightRadius: 14,
          borderBottomLeftRadius: 14,
        }}>
        <TouchableOpacity
          onPress={selectDoc}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: responsiveHeight(5),
          }}>
          <View
            style={{
              backgroundColor: '#FB6D48',
              padding: 2.8,
              borderRadius: 99,
            }}>
            <Image
              style={{
                width: responsiveWidth(33.4),
                height: responsiveHeight(15),
                borderRadius: 99,
              }}
              source={
                selectImg ? {uri: selectImg} : require('../Image/avtar.png')
              }
            />
          </View>
        </TouchableOpacity>

        <Text
          style={{
            color: 'white',
            alignSelf: 'center',
            fontSize: responsiveFontSize(3),
            fontWeight: '500',
            marginTop: responsiveHeight(2.5),
          }}>
          Hey, {userData.name}
        </Text>
        <Text
          style={{
            color: 'white',
            alignSelf: 'center',
            fontSize: responsiveFontSize(2.3),
            fontWeight: '500',
            marginTop: responsiveHeight(0.4),
          }}>
          {userData.email}
        </Text>
      </View>

      {/* function */}
      <View>
        <View
          style={{
            marginTop: responsiveHeight(4),
            marginLeft: responsiveWidth(6),
          }}>
          <TouchableOpacity
            onPress={() => {
              setDocsOpen(true);
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: responsiveWidth(7),
            }}>
            <Ionicons name="documents-outline" color={'black'} size={37} />
            <Text
              style={{
                fontSize: responsiveFontSize(2.2),
                color: 'black',
                fontWeight: '500',
              }}>
              Your Documents
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: responsiveWidth(100),
            height: responsiveHeight(0.2),
            backgroundColor: '#B2B2B2',
            alignSelf: 'center',
            marginTop: responsiveHeight(1),
          }}></View>
      </View>

      <View>
        <TouchableOpacity
          onPress={() => {setJoin(true)}}
          style={{
            marginTop: responsiveHeight(2),
            marginLeft: responsiveWidth(6),
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: responsiveWidth(7),
            }}>
            <SimpleLineIcons name="event" color={'black'} size={34} />
            <Text
              style={{
                fontSize: responsiveFontSize(2.2),
                color: 'black',
                fontWeight: '500',
              }}>
              Join Community
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            width: responsiveWidth(100),
            height: responsiveHeight(0.2),
            backgroundColor: '#B2B2B2',
            alignSelf: 'center',
            marginTop: responsiveHeight(1),
          }}></View>
      </View>

      <View>
        <TouchableOpacity
          onPress={ShareApp}
          style={{
            marginTop: responsiveHeight(1.4),
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
              size={45}
            />
            <Text
              style={{
                fontSize: responsiveFontSize(2.2),
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
            height: responsiveHeight(0.2),
            backgroundColor: '#B2B2B2',
            alignSelf: 'center',
            marginTop: responsiveHeight(1),
          }}></View>
      </View>
      <View>
        <TouchableOpacity
          onPress={reportIssue}
          style={{
            marginTop: responsiveHeight(2),
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
              size={38}
            />
            <Text
              style={{
                fontSize: responsiveFontSize(2.2),
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
            height: responsiveHeight(0.2),
            backgroundColor: '#B2B2B2',
            alignSelf: 'center',
            marginTop: responsiveHeight(1),
          }}></View>
      </View>
      <View>
        <View
          style={{
            marginTop: responsiveHeight(2.5),
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
              size={38}
            />
            <Text
              style={{
                fontSize: responsiveFontSize(2.2),
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
            height: responsiveHeight(0.2),
            backgroundColor: '#B2B2B2',
            alignSelf: 'center',
            marginTop: responsiveHeight(1),
          }}></View>
      </View>
      <View>
        <View
          style={{
            marginTop: responsiveHeight(2),
            marginLeft: responsiveWidth(6),
          }}>
          <TouchableOpacity
            onPress={() => {
              setIsVisible(true);
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: responsiveWidth(7),
            }}>
            <FontAwesome
              style={{marginBottom: responsiveHeight(1)}}
              name="code"
              color={'black'}
              size={33}
            />
            <Text
              style={{
                fontSize: responsiveFontSize(2.2),
                color: 'black',
                fontWeight: '500',
              }}>
              Developer
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: responsiveWidth(100),
            height: responsiveHeight(0.2),
            backgroundColor: '#B2B2B2',
            alignSelf: 'center',
            marginTop: responsiveHeight(0.4),
          }}></View>
      </View>
      <TouchableOpacity onPress={handleLogOut}>
        <Button
          name={'Logout'}
          stylebtn={{width: responsiveWidth(92)}}
          textStyle={{fontSize: responsiveFontSize(3)}}
        />
      </TouchableOpacity>

      <Modal
        style={{justifyContent: 'flex-end', margin: 0}}
        animationIn={'slideInUp'}
        isVisible={isVisible}
        onBackdropPress={() => {
          setIsVisible(false);
        }}>
        <View
          style={{
            width: responsiveWidth(100),
            backgroundColor: '#ECEDF2',
            height: responsiveHeight(35),
            borderTopLeftRadius: 19,
            borderTopRightRadius: 19,
          }}>
          <View>
            <Text
              style={{
                fontSize: responsiveFontSize(2.8),
                alignSelf: 'center',
                marginTop: responsiveHeight(2.2),
                color: 'black',
                fontWeight: '500',
              }}>
              Follow Us
            </Text>

            <View
              style={{
                marginLeft: responsiveWidth(5),
                flexDirection: 'row',
                gap: responsiveWidth(12),
                marginTop: responsiveHeight(3),
              }}>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL('https://www.instagram.com/_ashish.raj_10/');
                }}
                style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  style={{
                    resizeMode: 'contain',
                    width: responsiveWidth(14),
                    height: responsiveHeight(12),
                  }}
                  source={require('../Image/instagram.png')}
                />
                <Text
                  style={{
                    color: 'black',
                    fontSize: responsiveFontSize(2.5),
                    fontWeight: '500',
                    }}>    
                  Instagram      
                </Text>    
              </TouchableOpacity>     
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    'https://www.linkedin.com/in/ashish-raj-300943188/',
                  );
                }}
                style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image  
                  style={{
                    resizeMode: 'contain',
                    width: responsiveWidth(14),
                    height: responsiveHeight(12),
                  }}
                  source={require('../Image/linkedin.png')}
                />
                <Text
                  style={{
                    color: 'black',
                    fontSize: responsiveFontSize(2.5),
                    fontWeight: '500',
                  }}>
                  Linkedin
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL('https://github.com/Ashisharjun12');
                }}
                style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  style={{
                    resizeMode: 'contain',
                    width: responsiveWidth(14),
                    height: responsiveHeight(12),
                  }}
                  source={require('../Image/github.png')}
                />
                <Text
                  style={{
                    color: 'black',
                    fontSize: responsiveFontSize(2.5),
                    fontWeight: '500',
                  }}>
                  Github
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* documents modal */}
      <Modal
        style={{justifyContent: 'flex-end', margin: 0}}
        animationIn={'slideInUp'}
        isVisible={docsOpen}
        onBackdropPress={() => {
          setDocsOpen(false);
        }}>
        <View
          style={{
            width: responsiveWidth(100),
            backgroundColor: '#ECEDF2',
            height: responsiveHeight(35),
            borderTopLeftRadius: 19,
            borderTopRightRadius: 19,
          }}>
          <Text
            style={{
              fontSize: responsiveFontSize(3.2),
              color: 'black',
              fontWeight: '500',
              alignSelf: 'center',
              marginTop: responsiveHeight(2.4),
            }}>
            Documents{' '}
          </Text>

          <View style={{marginTop:responsiveHeight(4),gap:responsiveWidth(2.5)}}>
            <TouchableOpacity>
            <Button name={'Upload Docs'}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Button name={'View Docs'}/>
            </TouchableOpacity>
            

            
          </View>
        </View>
      </Modal>

      {/* commiunity Join */}
      <Modal
        style={{justifyContent: 'flex-end', margin: 0}}
        animationIn={'slideInUp'}
        isVisible={join}
        onBackdropPress={() => {
          setJoin(false);
        }}>
        <View
          style={{
            width: responsiveWidth(100),
            backgroundColor: '#ECEDF2',
            height: responsiveHeight(35),
            borderTopLeftRadius: 19,
            borderTopRightRadius: 19,
          }}>
          <View>
            <Text
              style={{
                fontSize: responsiveFontSize(2.8),
                alignSelf: 'center',
                marginTop: responsiveHeight(2.2),
                color: 'black',
                fontWeight: '500',
              }}>
              Join Now
            </Text>

            <View
              style={{
               
                flexDirection: 'row',
                justifyContent:'center',
                gap: responsiveWidth(12),
                marginTop: responsiveHeight(1.2),
              }}>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL('https://whatsapp.com/channel/0029VaVbDry2ZjCqAkQwlm1d');
                }}
                style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  style={{
                    resizeMode: 'contain',
                    width: responsiveWidth(12),
                    height: responsiveHeight(9),
                  }}
                  source={require('../Image/whatsapp.png')}
                />
                <Text
                  style={{
                    color: 'black',
                    fontSize: responsiveFontSize(2.2),
                    fontWeight: '500',
                    }}>    
                  Whatsapp    
                </Text>    
              </TouchableOpacity>     
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    '#',
                  );
                }}
                style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image  
                  style={{
                    resizeMode: 'contain',
                    width: responsiveWidth(12),
                    height: responsiveHeight(9),
                  }}
                  source={require('../Image/telegram.png')}
                />
                <Text
                  style={{
                    color: 'black',
                    fontSize: responsiveFontSize(2.2),
                    fontWeight: '500',
                  }}>
                  Telegram
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL('#');
                }}
                style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  style={{
                    resizeMode: 'contain',
                    width: responsiveWidth(12),
                    height: responsiveHeight(9),
                  }}
                  source={require('../Image/instagram.png')}
                />
                <Text
                  style={{
                    color: 'black',
                    fontSize: responsiveFontSize(2.2),
                    fontWeight: '500',
                  }}>
                  Instagram
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
               
                flexDirection: 'row',
                justifyContent:'center',
                gap: responsiveWidth(12),
                marginTop: responsiveHeight(1.2),
              }}>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL('#');
                }}
                style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  style={{
                    resizeMode: 'contain',
                    width: responsiveWidth(12),
                    height: responsiveHeight(9),
                  }}
                  source={require('../Image/linkedin.png')}
                />
                <Text
                  style={{
                    color: 'black',
                    fontSize: responsiveFontSize(2.2),
                    fontWeight: '500',
                    }}>    
                  Linkedin 
                </Text>    
              </TouchableOpacity>     
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    '#',
                  );
                }}
                style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image  
                  style={{
                    resizeMode: 'contain',
                    width: responsiveWidth(12),
                    height: responsiveHeight(9),
                  }}
                  source={require('../Image/th.png')}
                />
                <Text
                  style={{
                    color: 'black',
                    fontSize: responsiveFontSize(2.2),
                    fontWeight: '500',
                  }}>
                  Threads
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL('#');
                }}
                style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  style={{
                    resizeMode: 'contain',
                    width: responsiveWidth(10),
                    height: responsiveHeight(9),
                  }}
                  source={require('../Image/linktree.png')}
                />
                <Text
                  style={{
                    color: 'black',
                    fontSize: responsiveFontSize(2.2),
                    fontWeight: '500',
                  }}>
                  Linktree
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Profile;
