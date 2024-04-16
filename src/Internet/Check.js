import {View, Text, Image} from 'react-native';
import React, { useEffect } from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import NetInfo from "@react-native-community/netinfo";





const Check = ({isconnected ,setIsConnected}) => {


    useEffect(()=>{
        const unsubscribe = NetInfo.addEventListener(state => {
            console.log("Connection type", state.type);
            console.log("Is connected?", state.isConnected);
            setIsConnected(state.isConnected)
          });
          
          // Unsubscribe
          return ()=>{
            unsubscribe();
          }
    
    },[])

  return (
    <View style={{marginTop:responsiveHeight(25)}}>
      <Image style={{resizeMode:'contain',width:responsiveWidth(50),height:responsiveHeight(20),alignSelf:'center'}} source={require('../Image/internet.png')}/>

      <Text style={{fontSize:responsiveFontSize(4),color:'red',fontWeight:'500',alignSelf:'center',marginTop:responsiveHeight(4)}}>{"Please Turn\n On Internet!!"}</Text>
    </View>
  );
};

export default Check;
