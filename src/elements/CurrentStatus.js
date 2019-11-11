import React from 'react';
import {StyleSheet,View,Text} from 'react-native';

class CurrentStatus extends React.Component{
    render(){
        const {name,number}=this.props;
        return(
            <View style={styles.inline}>
                <View>
        <Text style={styles.textformat}>{this.props.name} {this.props.number} 単位</Text>
                </View>
                 
                
            </View>

        );
    }
}


const styles = StyleSheet.create({
    inline: {
        flexDirection: 'row',
        padding:20,
    },
    textformat: {
        fontSize: 30,
    
    },
});

  export default CurrentStatus;