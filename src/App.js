import * as React from 'react';
import Navigation from './navigation/drawer';
import Home from './screens/home';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './store/store';

LogBox.ignoreAllLogs();

export default function App() {
  return <Home />;
}
