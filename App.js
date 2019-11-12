import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
//import Table from 'react-native-simple-table';


import Bar from './src/elements/Bar';
import SettingMenu from './src/conmponents/SettingMenu';
import MenuList from './src/conmponents/MenuList';
import MenuListScreen from './src/screens/MenuListScreen';
import SubjectDetail from "./src/conmponents/SubjectDetail";
import CurrentStatusList from './src/conmponents/CurrentStatusList';
import TimeTable from './src/conmponents/TimeTable';
import TimeTableScreen from './src/screens/TimeTableScreen';
import CurrentStatusListScreen from './src/screens/CurrentStatusListScreen';
import SubjectDetailScreen from './src/screens/SubjectDetailScreen';
import SettingHomeScreen from './src/screens/SettingHomeScreen';
import CurrentStatus from './src/elements/CurrentStatus';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';



export default function App() {
  return (

    <View style={styles.container}>
      <TimeTableScreen/>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  
  },

});
