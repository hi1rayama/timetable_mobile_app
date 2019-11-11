import React from 'react';
import {StyleSheet,View} from 'react-native';

import Bar from '../elements/Bar';
import TimeTable from "../conmponents/TimeTable";


class TimeTableScreen extends React.Component{
    render(){
        return(
            
                <View style={styles.container}  >
                    <View >
                    <Bar name='時間割'/>
                    </View>

                    <View style={styles.settingMenu}>
                    <TimeTable />
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
        width:'95%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    
      },
})
export default TimeTableScreen;