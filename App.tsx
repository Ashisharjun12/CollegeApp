import {View, Text} from 'react-native';
import React from 'react';
import Route from './src/Navigation/Route';
import {AppwriteProvider} from './src/Appwrite/AppwriteContex';

const App = () => {
  return (
    <AppwriteProvider>
      <Route />
    </AppwriteProvider>
  );
};

export default App;
