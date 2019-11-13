import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//import Table from 'react-native-simple-table';


import Bar from './src/elements/Bar';
import SettingMenu from './src/conmponents/SettingMenu';
import MenuList from './src/conmponents/MenuList';
import MenuListScreen from './src/screens/MenuListScreen';
import CurrentStatusList from './src/conmponents/CurrentStatusList';
import TimeTableScreen from './src/screens/TimeTableScreen';
import CurrentStatusListScreen from './src/screens/CurrentStatusListScreen';
import SubjectDetailScreen from './src/screens/SubjectDetailScreen';
import SettingHomeScreen from './src/screens/SettingHomeScreen';
import CurrentStatus from './src/elements/CurrentStatus';


const App = createStackNavigator({
  
  //Login:{ screen:LoginScreen },
  //Sign:{screen:SignupScreen},
  MenuList:{screen:MenuListScreen},
  TimeTable: { screen: TimeTableScreen},
  SettingHome:{screen:SettingHomeScreen},
  SubjectDetail:{screen:SubjectDetailScreen}
 
}, {
  defaultNavigationOptions: {
    headerTintColor:'#fff',
    headerBackTitle:null,
    headerStyle: {
      backgroundColor: '#00aaff',
      shadowColor:'#000',
      shadowOffset:{width:0,height:0},
      shadowOpacity:0.5,
      shadowRadius:3,
      zIndex:10,
    },
    headerTitleStyle: {
      color:'#fff',
      fontSize:24,
      fontWeight:'bold',
    }
  }
});


export default createAppContainer(App);
