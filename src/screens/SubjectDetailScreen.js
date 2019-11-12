import React from 'react';
import {StyleSheet,View,Text} from 'react-native';

import Bar from '../elements/Bar';
import SubjectDetail from "../conmponents/SubjectDetail";


class SubjectDetailScreen extends React.Component{
    render(){
        return(
            
                <View style={styles.container}  >
                    <View >
                    <Bar name='月曜日/2限'/>
                    </View>

                    <View style={styles.settingMenu}>
                    <SubjectDetail />
                    </View>
                    
                </View>
                
           
            

        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width:'100%',
    },
    settingMenu:{
        width:'100%',
        flex: 1,

        flexDirection: 'column',
        justifyContent: 'center',
    
      },
})
export default SubjectDetailScreen;