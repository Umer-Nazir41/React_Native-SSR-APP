import React, {useState, useEffect} from 'react';
import {StyleSheet, SafeAreaView, View, Text, FlatList} from 'react-native';
import Divider from 'rn-dividers';
import axios from 'axios';
import MyCard from '../components/card';

var HTMLParser = require('fast-html-parser');

const Home = ({navigation}) => {
  const [heading, setHeading] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getProfile = async () => {
      const users = await axios
        .get('http://150.230.126.140:3000/')
        .then(function (response) {
          var root = HTMLParser.parse(response.data);
          title =
            root.querySelector('.navbar-fixed').childNodes[0].childNodes[0]
              .childNodes[0].childNodes[0].childNodes[0].rawText;
          head = root.querySelector('.section').childNodes[0].rawText;

          // postCards =
          //   root.querySelectorAll('.section')[1].childNodes[0].childNodes[0]
          //     .childNodes[0].childNodes[0].childNodes[0];
          // console.log(postCards);

          postCards =
            root.querySelectorAll('.section')[1].childNodes[0].childNodes
              .length;
          console.log('tmp.text', typeof postCards);

          //console.log(postCards);
          //console.log(postCards);
          //.childNodes[0].childNodes[1].childNodes[0].childNodes[0].rawText;

          for (let i = 0; i < postCards; i++) {
            try {
              rawText =
                root.querySelectorAll('.section')[1].childNodes[0].childNodes[i]
                  .childNodes[0].childNodes[1].childNodes[0].childNodes[0]
                  .rawText;
              let tmp = {
                text: rawText,
              };
              setPosts(posts => [...posts, tmp]);
            } catch (error) {
              console.log('No Error', error);
            }
          }

          setHeading(head);
          navigation.setOptions({headerTitle: title});
        })
        .catch(function (error) {
          alert(error.message);
        });
    };

    getProfile();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.CardContainer}>
        <Text
          style={{
            paddingTop: 10,
            fontSize: 35,
            fontWeight: 'bold',
          }}>
          {heading}
        </Text>
        <Divider borderColor="#E0E0E0" color="#E0E0E0" orientation="center" />
        <FlatList
          data={posts}
          renderItem={({item}) => {
            return <MyCard img="" Content={item.text} />;
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  CardContainer: {flex: 1, width: '100 %', height: '100%', padding: 20},
});

export default Home;
