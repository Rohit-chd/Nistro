/**
 * React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar, View} from 'react-native';
import NavigationRoute from './src/NavigationContainer/NavigationRoute';

import './src/config/ReactotronConfig';
import {store, persistor} from './src/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaView style={styles.topSafeArea} />
        <View style={styles.StatusBar}>
          <StatusBar barStyle="light-content" backgroundColor="#cc0166" />
        </View>
        <FlashMessage position="top" />
        <NavigationRoute />
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#660133',
    flex: 1,
  },
  StatusBar: {
    height: 0,
    backgroundColor: '#cc0166',
  },
  topSafeArea: {
    flex: 0,
    backgroundColor: '#cc0166',
  },
});

export default App;
