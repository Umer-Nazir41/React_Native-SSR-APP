import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/home';
import {aTags} from '../utilities/htmlToElement/htmlToElement';

const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#F44336',
          },
        }}>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{headerTitleAlign: 'center', title: 'Home'}}
        />
        <Drawer.Screen
          name="techRadar"
          component={Home}
          options={{headerTitleAlign: 'center', title: 'Tech Radar'}}
        />
        <Drawer.Screen
          name="mashable"
          component={Home}
          options={{headerTitleAlign: 'center', title: 'Mashable'}}
        />
        <Drawer.Screen
          name="theVerge"
          component={Home}
          options={{headerTitleAlign: 'center', title: 'The Verge'}}
        />
        <Drawer.Screen
          name="tnw"
          component={Home}
          options={{headerTitleAlign: 'center', title: 'TNW'}}
        />
        <Drawer.Screen
          name="wired"
          component={Home}
          options={{headerTitleAlign: 'center', title: 'Wired'}}
        />
        <Drawer.Screen
          name="recode"
          component={Home}
          options={{headerTitleAlign: 'center', title: 'Recode'}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
