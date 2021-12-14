import React from 'react';
import {StyleSheet} from 'react-native';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

const MyCard = props => (
  <Card style={styles.container} mode="elevated" elevation={10}>
    <Card.Cover
      source={{uri: props.img ? props.img : 'https://picsum.photos/700'}}
    />
    <Card.Content>
      <Paragraph style={styles.para}>{props.Content}</Paragraph>
    </Card.Content>
  </Card>
);
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 20,
  },
  para: {
    paddingTop: 10,
    fontSize: 15,
    textAlign: 'left',
  },
});
export default MyCard;
