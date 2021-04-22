/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry, LogBox, YellowBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
console.disableYellowBox = true;
LogBox.ignoreAllLogs(true);
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader',
  'RNDeviceInfo',
  'Warning: An update',
]);
AppRegistry.registerComponent(appName, () => App);
