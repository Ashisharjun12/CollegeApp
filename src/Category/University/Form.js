import React, { useState } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const Form = () => {
  const [loading, setLoading] = useState(true);

  const handleLoadStart = () => {
    setLoading(true);
  };

  const handleLoadEnd = () => {
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://beu.intelliexams.com/beuexams/frmIntelliHomePage.aspx' }}
        style={styles.webview}
        onLoadStart={handleLoadStart}
        onLoadEnd={handleLoadEnd}
      />
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={55} color="black" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Form;
