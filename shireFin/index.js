/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import { Amplify } from 'aws-amplify';
import awsExports from './shireFin/aws-exports';

Amplify.configure(awsExports);

AppRegistry.registerComponent(appName, () => App);
