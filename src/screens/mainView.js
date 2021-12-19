import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const MainView = ({body}) => {
  return <View style={styles.container}>{body}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MainView;
