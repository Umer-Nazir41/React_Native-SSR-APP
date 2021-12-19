import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const Header = ({title, aTags}) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#007ACC',
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth,
    height: (windowWidth * 12) / 100,
    position: 'absolute',
    top: 0,
    //zIndex: 100,
  },
});

export default Header;
