import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useWindowDimensions} from 'react-native';
import RenderHtml from 'react-native-render-html';
import axios from 'axios';

var HTMLParser = require('fast-html-parser');

const Home = ({navigation}) => {
  const [source, setSource] = useState({html: ''});
  const {width} = useWindowDimensions();

  useEffect(() => {
    const getProfile = async () => {
      const users = await axios
        .get('http://150.230.126.140:3000/.')
        .then(function (response) {
          var root = HTMLParser.parse(response.data);
          title = root.querySelector('.navbar-fixed');
          console.log(title);
          setSource({html: response.data});
        })
        .catch(function (error) {
          alert(error.message);
        });
    };

    getProfile();
  }, []);

  return <RenderHtml contentWidth={width} source={source} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
