import React, { useState } from 'react';
import { StyleSheet, Dimensions, View, Button, Text } from 'react-native';
import Pdf from 'react-native-pdf';
import RNFetchBlob from 'rn-fetch-blob';

const ViewSelfHelp = ({ route }) => {
  const { url ,name} = route.params;
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
          description: `${name}`,
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
      <Button title="Download PDF" onPress={handleDownload} />
      {loadingProgress > 0 && (
        <View style={styles.progressContainer}>
          <Text>Loading: {loadingProgress.toFixed(2)}%</Text>
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

export default ViewSelfHelp;
