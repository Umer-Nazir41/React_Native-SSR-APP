import * as React from 'react';
import Navigation from './navigation/drawer';
import Home from './screens/home';
import {LogBox} from 'react-native';

LogBox.ignoreAllLogs();

export default function App() {
  return <Home />;
}
