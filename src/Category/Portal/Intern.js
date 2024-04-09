import React, { useState } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

const Intern = () => {
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
        source={{ uri: 'https://internship.aicte-india.org/' }}
        style={styles.webview}
        onLoadStart={handleLoadStart}
        onLoadEnd={handleLoadEnd}
      />
      {loading && (
        <View style={styles.loading}>
          <ActivityIndicator size={55} color="orange" />
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
  loading: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'white', 
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Intern;
