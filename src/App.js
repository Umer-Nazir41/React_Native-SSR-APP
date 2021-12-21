import * as React from 'react';
import Navigation from './navigation/drawer';
import Home from './screens/home1';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './store/store';

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
