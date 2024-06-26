import { StyleSheet, Dimensions, View } from 'react-native';
import React from 'react'
import Pdf from 'react-native-pdf';

const Holiday = () => {
  return (
    <View style={styles.container}>
    <Pdf
    trustAllCerts={false}
    
        source={require('./../../../Assets/Pdf/holiday.pdf')}
        onLoadComplete={(numberOfPages,filePath) => {
            console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page,numberOfPages) => {
            console.log(`Current page: ${page}`);
        }}
        onError={(error) => {
            console.log(error);
        }}
        onPressLink={(uri) => {
            console.log(`Link pressed: ${uri}`);
        }}
        style={styles.pdf}/>
</View>
  )
}

export default Holiday


const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 25,
  },
  pdf: {
      flex:1,
      width:Dimensions.get('window').width,
      height:Dimensions.get('window').height,
  }
});