import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import GoBack from '../Common/GoBack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import Modal from 'react-native-modal';
import Button from '../Common/Button';

const Event = () => {

  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(false);
  const [step, setStep] = useState(1);
  

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handelSubmit =()=>{
    setIsVisible(false)
    

  }

  const renderQuestionSection = () => {
    switch (step) {
      case 1:
        return (
          <>
            {/* Your College Name input */}
            <Text
              style={{
                fontSize: responsiveFontSize(2.9),
                color: 'black',
                fontWeight: '500',
                alignSelf: 'center',
              }}>
              Want To Create Events ?
            </Text>
            <View
              style={{
                marginLeft: responsiveWidth(12),
                marginTop: responsiveHeight(3),
              }}>
              <Text style={{ fontSize: responsiveFontSize(2.4), color: 'black' }}>
                Your College Name
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  width: responsiveWidth(80),
                  marginRight: responsiveWidth(14),
                  alignItems: 'center',
                  marginTop: responsiveHeight(3),
                  marginBottom: responsiveHeight(20),
                  backgroundColor: 'white',
                  alignSelf: 'center',
                  borderRadius: 11,
                  paddingVertical: responsiveHeight(0.5),
                  paddingHorizontal: responsiveWidth(5),
                }}>
                <TextInput
                  style={{
                    flex: 1,
                    fontSize: responsiveFontSize(2.3),
                    color: 'black',
                  }}
                  placeholderTextColor={"black"}
                  placeholder="College Name..."
                />
              </View>
            </View>
          </>
        );
      case 2:
        return (
          <>
            {/* Event Description input */}
            <Text
              style={{
                fontSize: responsiveFontSize(2.9),
                color: 'black',
                fontWeight: '500',
                alignSelf: 'center',
              }}>
              Add Description
            </Text>
            <View
              style={{
                marginLeft: responsiveWidth(12),
                marginTop: responsiveHeight(3),
              }}>
              <Text style={{ fontSize: responsiveFontSize(2.4), color: 'black' }}>
                Event Description
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  width: responsiveWidth(80),
                  marginRight: responsiveWidth(14),
                  alignItems: 'center',
                  marginTop: responsiveHeight(3),
                  marginBottom: responsiveHeight(20),
                  backgroundColor: 'white',
                  alignSelf: 'center',
                  borderRadius: 11,
                  paddingVertical: responsiveHeight(0.5),
                  paddingHorizontal: responsiveWidth(5),
                }}>
                <TextInput
                  style={{
                    flex: 1,
                    fontSize: responsiveFontSize(2.3),
                    color: 'black',
                  }}
                  placeholderTextColor={"black"}
                  placeholder="Write description..."
                />
              </View>
            </View>
          </>
        );
      case 3:
        return (
          <>
            {/* Upload Banner input */}
            <Text
              style={{
                fontSize: responsiveFontSize(2.9),
                color: 'black',
                fontWeight: '500',
                alignSelf: 'center',
              }}>
              Upload Banner
            </Text>
            <View
              style={{
                marginLeft: responsiveWidth(12),
                marginTop: responsiveHeight(3),
              }}>
              <Text style={{ fontSize: responsiveFontSize(2.4), color: 'black' }}>
                Upload Event Banner
              </Text>
              <View
                style={{
                  justifyContent: 'center',
                  width: responsiveWidth(80),
                  height: responsiveHeight(18),
                  marginRight: responsiveWidth(14),
                  alignItems: 'center',
                  marginTop: responsiveHeight(3),
                  marginBottom: responsiveHeight(8.9),
                  backgroundColor: 'white',
                  alignSelf: 'center',
                  borderRadius: 11,
                  paddingVertical: responsiveHeight(0.5),
                  paddingHorizontal: responsiveWidth(5),
                }}>
                <TouchableOpacity
                  style={{
                    width: responsiveWidth(12),
                    height: responsiveWidth(12),
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'black',
                    borderRadius: 99,
                  }}>
                  <AntDesign name="plus" color={'white'} size={32} />
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: responsiveFontSize(2.1),
                    color: 'black',
                    marginTop: responsiveHeight(1),
                  }}>
                  Upload here
                </Text>
              </View>
            </View>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <ScrollView style={{ backgroundColor: '#ECEDF2', height: '100%' }}>
      <View>
        <GoBack />
        <View style={{ marginTop: responsiveHeight(2.5) }}>
          <Text
            style={{
              fontSize: responsiveFontSize(2.5),
              fontWeight: '500',
              color: 'black',
              marginLeft: responsiveWidth(7),
            }}>
            Upcoming Events
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: 'black',
              fontSize: responsiveFontSize(2.7),
              alignSelf: 'center',
              position: 'absolute',
              marginTop: responsiveHeight(30),
              fontWeight: '500',
            }}>
            {'  Coming Soon..'}
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            setIsVisible(true);
          }}
          style={{
            width: responsiveWidth(15),
            height: responsiveWidth(15),
            backgroundColor: 'black',
            borderRadius: 99,
            marginTop: responsiveHeight(70),
            marginLeft: responsiveWidth(74),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AntDesign name="plus" color={'white'} size={38} />
        </TouchableOpacity>

        <Modal
          style={{ justifyContent: 'flex-end', margin: 0 }}
          animationIn={'slideInUp'}
          isVisible={isVisible}
          onBackdropPress={() => {
            setIsVisible(false);
            setStep(1);
          }}>
          <View
            style={{
              width: responsiveWidth(100),
              backgroundColor: '#ECEDF2',
              height: responsiveHeight(60),
              borderTopLeftRadius: 19,
              borderTopRightRadius: 19,
            }}>
            <View style={{ marginTop: responsiveHeight(3) }}>
              {renderQuestionSection()}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: responsiveWidth(5),
                  marginTop: responsiveHeight(3),
                }}>
                {/* Back button */}
               
                {/* Next or Submit button */}
                <TouchableOpacity style={{ marginLeft: responsiveWidth(3.6) }} onPress={step > 2 ? handelSubmit : handleNext}>
                  <Button name={step > 2 ? 'Submit' : 'Next'} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

      </View>
    </ScrollView>
  );
};

export default Event;
