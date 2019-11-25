import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
//import Table from 'react-native-simple-table';
import firebase from 'firebase';
import ENV from './env.json';


import MenuListScreen from './src/screens/MenuListScreen';
import TimeTableScreen from './src/screens/TimeTableScreen';
import CurrentStatusListScreen from './src/screens/CurrentStatusListScreen';
import SubjectDetailScreen from './src/screens/SubjectDetailScreen';
import SettingHomeScreen from './src/screens/SettingHomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import StartScreen from './src/screens/StartScreen';
import TodoCreateScreen from './src/screens/TodoCreateScreen';
import TodoListScreen from './src/screens/TodoListScreen';
import TodoDetailScreen from './src/screens/TodoDetailScreen';
require("firebase/firestore");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: ENV.FIREBASE_API_KEY,
  authDomain: ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL: ENV.FIREBASE_DB_URL,
  projectId: ENV.FIREBASE_PRJ_ID,
  storageBucket: ENV.FIREBASE_STORAGE,
  messagingSenderId: ENV.FIREBASE_SENDER_ID,
  appId: ENV.FIREBASE_APP_ID,
  measurementId: ENV.FIREBASE_MSM_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const TabNavigator = createBottomTabNavigator({
  TimeTable: { screen: TimeTableScreen, },
  MenuList: { screen: MenuListScreen },
  SettingHome: { screen: SettingHomeScreen },
  TodoList:{screen:TodoListScreen},


},
  {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerBackTitle: null,
      headerStyle: {
        backgroundColor: '#00aaff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        zIndex: 10,
      }
    }

  });

const App = createStackNavigator({
  Login: { screen: LoginScreen },
  Sign: { screen: SignupScreen },
  Start:{screen:StartScreen},
  TabNavigator,
  SubjectDetail: { screen: SubjectDetailScreen },
 TodoDetail:{screen:TodoDetailScreen},
  TodoCreate:{screen:TodoCreateScreen}

}, {
  defaultNavigationOptions: {
    title:'TimeTableApp',
    headerTintColor: '#fff',
    headerBackTitle: null,
    headerStyle: {
      backgroundColor: '#00aaff',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.5,
      shadowRadius: 3,
      zIndex: 10,
    },
    headerTitleStyle: {
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold',
    }
  }
});


export default createAppContainer(App);


/**
 *
const App = createBottomTabNavigator({

  TimeTable: {
    screen: createStackNavigator({
        Login:{screen:LoginScreen},
        Signup:{screen:SignupScreen},
        Start:{screen:StartScreen},
        TimeTable: {screen: TimeTableScreen},
        SubjectDetail: { screen: SubjectDetailScreen },
      }),
    navigationOptions: {
      title: '時間割',
    }
  },

  MenuList: {
    screen: createStackNavigator({
        MenuList: {screen: MenuListScreen},
      }),
    navigationOptions: {
      title: 'TODO',
    }
  },

  SettingHome: {
    screen: createStackNavigator({
        Setting: { screen: SettingHomeScreen},
      }),
    navigationOptions: {
      title: '設定',
    }
  },
});





const App = createStackNavigator({
  TimeTable: {screen: TimeTableScreen},
  MenuList:{screen:MenuListScreen},
  SettingHome:{screen:SettingHomeScreen},
  Login: { screen: LoginScreen },
  Signup: { screen: SignupScreen },
  SubjectDetail: { screen: SubjectDetailScreen },

}, {
  defaultNavigationOptions: {
    headerTintColor: '#fff',
    headerBackTitle: null,
    headerStyle: {
      backgroundColor: '#00aaff',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.5,
      shadowRadius: 3,
      zIndex: 10,
    },
    headerTitleStyle: {
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold',
    }
  }
});


 */
