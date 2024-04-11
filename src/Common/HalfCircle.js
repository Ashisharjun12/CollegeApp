import React from 'react';
import { View, StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const HalfCircle = () => {
  return (
    <View style={styles.container}>
      <View style={styles.halfCircle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top:'47%',
    alignItems: 'center',
    position:'absolute'
  },
  halfCircle: {
    
    width: responsiveWidth(38), 
    height: responsiveHeight(10), 
    backgroundColor: '#A1C2F1', 
    borderTopLeftRadius: 65, 
    borderTopRightRadius: 65, 
    overflow: 'hidden', 
  },
});

export default HalfCircle;
