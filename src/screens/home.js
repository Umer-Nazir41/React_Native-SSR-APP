import React, {useState, useEffect} from 'react';
import {Linking, Platform, StyleSheet, View, ScrollView} from 'react-native';
import data from '../data';
import axios from 'axios';
import htmlToElement from '../utilities/htmlToElement/htmlToElement';

const boldStyle = {fontWeight: 'bold'};
const italicStyle = {fontStyle: 'italic'};
const underlineStyle = {textDecorationLine: 'underline'};
const strikethroughStyle = {textDecorationLine: 'line-through'};
const codeStyle = {fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace'};

const baseStyles = StyleSheet.create({
  b: boldStyle,
  strong: boldStyle,
  i: italicStyle,
  em: italicStyle,
  u: underlineStyle,
  s: strikethroughStyle,
  strike: strikethroughStyle,
  pre: codeStyle,
  code: codeStyle,
  a: {
    fontWeight: 'bold',
    color: '#007AFF',
  },
  h1: {fontWeight: 'bold', fontSize: 36},
  h2: {fontWeight: 'bold', fontSize: 30},
  h3: {fontWeight: 'bold', fontSize: 24},
  h4: {fontWeight: 'bold', fontSize: 18},
  h5: {fontWeight: 'bold', fontSize: 14},
  h6: {fontWeight: 'bold', fontSize: 12},
});

const opts = {
  addLineBreaks: true,
  linkHandler: url => Linking.openURL(url),
  linkLongPressHandler: null,
  styles: {...baseStyles},
  onError: console.error.bind(console),
  //customRenderer: renderNode,
  RootComponent: element => <View {...element} />,
};

const Home = () => {
  const [html, setHtml] = useState();

  function convertDiv(heading) {
    heading = heading.replace(/nav\b/g, 'View');
    heading = heading.replace(/div\b/g, 'View');
    heading = heading.replace(/li\b/g, 'Text');
    heading = heading.replace(/ul\b/g, 'View');
    heading = heading.replace(/a\b/g, 'Text');
    setHtml(html => (html = heading));
    //console.log(heading);
  }

  useEffect(() => {
    const getHTML = async () => {
      const users = await axios
        .get('http://150.230.126.140:3000/')
        .then(function (response) {
          var root = response.data;
          root = root.split('<body>')[1];
          root = root.split('<script>')[0];
          root = root.split('<div class="navbar-fixed">')[1];
          // root = root.split('<div class="container"><div><div class="row">')[0];

          root = htmlToElement(root, opts, (err, element) => {
            if (err) {
              //console.log(err);
            }
            //element = element[0];
            setHtml(element);
          });

          console.log(root);
        })
        .catch(function (error) {
          alert(error.message);
        });
    };

    getHTML();
  }, []);

  console.log(html);
  //return <View>{data}</View>;
  return (
    <ScrollView>
      <View>{html}</View>
    </ScrollView>
  );
};

export default Home;
