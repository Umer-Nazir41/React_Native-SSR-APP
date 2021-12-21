import * as React from 'react';
import Navigation from './navigation/Drawer';
import Home from './screens/home';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './store/store';
import Drawer from "./navigation/Drawer"

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <Provider store={store}>
      {/* <Home /> */}
      <Drawer/>
    </Provider>
  );
}
