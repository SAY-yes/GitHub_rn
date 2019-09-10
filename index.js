/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import AppNavigator from './src/navigator/appNavigator'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppNavigator);
