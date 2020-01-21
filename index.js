/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Application from './app/Containers/Application'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Application);
