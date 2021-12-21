import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';

const Body = () => {
  const body = useSelector(state => state.header.body);
  return (
    <ScrollView>
      <View>{body}</View>
    </ScrollView>
  );
};

export default Body;
