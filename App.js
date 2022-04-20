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
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/FontAwesome';
import Splash from './screens/Splash';
import Home from './screens/Home';
import Login from './screens/Login';
import ToDoScreen from './screens/ToScreen';
import WheatherApp from './screens/WheatherApp';
import Transactions from './screens/Transactions';
import Signup from './screens/Signup';
import PhoneLogin from './screens/PhoneLogin';
import {LogBox} from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function DrawerRoutes() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="ToDoScreen" component={ToDoScreen} />
      <Drawer.Screen name="WheatherApp" component={WheatherApp} />
    </Drawer.Navigator>
  );
}

function TabRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'ToDoScreen') {
            iconName = focused ? 'list-ul' : 'list-alt';
          } else if (route.name === 'Transactions') {
            iconName = focused ? 'list-ul' : 'list-alt';
          }
          // You can return any component that you like here!
          return <Icons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" options={{headerShown: false}} component={Home} />
      <Tab.Screen
        name="ToDoScreen"
        options={{headerShown: false}}
        component={ToDoScreen}
      />
      <Tab.Screen
        name="Transactions"
        options={{headerShown: false}}
        component={Transactions}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="splash"
          options={{headerShown: false}}
          component={Splash}
        />
        <Stack.Screen
          name="Login"
          options={{headerShown: false}}
          component={Login}
        />
        <Stack.Screen
          name="Signup"
          options={{headerShown: false}}
          component={Signup}
        />
        <Stack.Screen
          name="HomeDrawer"
          options={{headerShown: false}}
          component={TabRoutes}
        />
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={Home}
        />
        <Stack.Screen
          name="ToDoScreen"
          options={{headerShown: false}}
          component={ToDoScreen}
        />
        <Stack.Screen
          name="PhoneLogin"
          options={{headerShown: false}}
          component={PhoneLogin}
        />
        {/* <Stack.Screen name="ToDoScreen" component={DrawerRoutes} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
