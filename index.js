/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Root from './App';
// import AppNavigator from './src/navigator/appNavigator'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Root);
