import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import Home from "../screens/home"


function removeDuplicates(originalArray, prop) {
  var newArray = [];
  var lookupObject  = {};

  for(var i in originalArray) {
     lookupObject[originalArray[i][prop]] = originalArray[i];
  }

  for(i in lookupObject) {
      newArray.push(lookupObject[i]);
  }
   return newArray;
}

// function HomeScreen({ navigation }) {
  
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//       {/* <View>
//       <Text>{JSON.stringify(uniqueArray)}</Text>
//       </View> */}
//     </View>
//   );
// }

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

const Drawer = createDrawerNavigator();

export default function App() {
  const header = useSelector((state) => state.header.aTags)
  var uniqueHeader = removeDuplicates(header, "name");
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        {
          uniqueHeader.map((item,index) => <Drawer.Screen key={index} name={item.name} component={Home} />)
          // uniqueHeader.map((item,index) => <Drawer.Screen key={index} name={item.name} component={Home} initialParams={{ link: item.link }}/>)
        }
        {/* <Drawer.Screen name="Home" component={HomeScreen}/>
        <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}