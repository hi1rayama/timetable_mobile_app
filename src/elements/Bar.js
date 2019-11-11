import React from 'react';
import {StyleSheet,View,Text} from 'react-native';

class Bar extends React.Component{
    render(){
      const name=this.props;
        return(
            <View style={styles.setting}>
                <View>
                <Text style={styles.settingTitle}>{this.props.name}</Text>
                </View>
                 
                
            </View>

        );
    }
}


const styles = StyleSheet.create({
    
    setting: {
      position:'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 90,
      paddingTop: 30,
      backgroundColor: '#00aaff',
      justifyContent:'center',
      alignItems: 'center',
      shadowColor:'#000',
      shadowOffset:{width:0,height:0},
      shadowOpacity:0.5,
      shadowRadius:3,
      zIndex:10,
    },
    settingTitle:{
      color:'#fff',
      fontSize:24,
      fontWeight:'bold',
    }
  });

  export default Bar;