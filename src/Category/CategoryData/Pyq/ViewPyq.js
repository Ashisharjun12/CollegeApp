import React, { useState } from 'react';
import { StyleSheet, Dimensions, View, Button, Text, TouchableOpacity, PermissionsAndroid } from 'react-native';
import Pdf from 'react-native-pdf';
import RNFetchBlob from 'rn-fetch-blob';
import Download from '../../../Common/Download';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';

const ViewPyq = ({ route }) => {
  const { url } = route.params;
  const [loadingProgress, setLoadingProgress] = useState(0);

  const handleDownload = async () => {
    const { config, fs } = RNFetchBlob;
    const date = new Date();
    const filedir = fs.dirs.DownloadDir;

    try {
      RNFetchBlob.config({
        fileCache: true,
        addAndroidDownloads: {
          useDownloadManager: true,
          notification: true,
          path: filedir + '/BeuOne' + Math.floor(date.getDate() + date.getSeconds() / 2) + '.pdf',
          description: 'File Download',
        },
      })
        .fetch('GET', url)
        .then((res) => {
          console.log('The file saved to ', res.path());
        });
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  const requestStoragePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'BeuOne App Storage Permission',
          message:
            'BeuOne App needs access to your storage ' +
            'so you can download files.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the storage');
        handleDownload();
      } else {
        console.log('Storage permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <View style={styles.container}>
      <Pdf
        trustAllCerts={false}
        source={{ uri: url }}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        onError={(error) => {
          console.log(error);
        }}
        onPressLink={(uri) => {
          console.log(`Link pressed: ${uri}`);
        }}
        onLoadProgress={(percent) => {
          // Update loading progress
          setLoadingProgress(percent);
        }}
        style={styles.pdf}
      />
      <TouchableOpacity
        onPress={requestStoragePermission}>
        <Download />
      </TouchableOpacity>

      {loadingProgress > 0 && (
        <View style={styles.progressContainer}>
          <Text style={{ color: 'black', fontSize: responsiveFontSize(2), fontWeight: '500' }}>Loading: {loadingProgress.toFixed(2)}%</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  progressContainer: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 10,
    borderRadius: 5,
  },
});

export default ViewPyq;
