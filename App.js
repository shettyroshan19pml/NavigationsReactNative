/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'

import Splash from './screens/Splash'
import Home from './screens/Home'
import Login from './screens/Login'
import ToDoScreen from './screens/ToScreen'
import WheatherApp from './screens/WheatherApp'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerRoutes(){
  return(
    <Drawer.Navigator initialRouteName="Home">
       <Drawer.Screen name="Home" component={Home}/>
      <Drawer.Screen name="ToDoScreen" component={ToDoScreen}/>
      <Drawer.Screen name="WheatherApp" component={WheatherApp}/>
    </Drawer.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={DrawerRoutes} />
      {/* <Stack.Screen name="ToDoScreen" component={DrawerRoutes} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
