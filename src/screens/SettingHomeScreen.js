import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Bar from '../elements/Bar';
import SettingMenu from '../conmponents/SettingMenu';


class SettingHomeScreen extends React.Component {
    static navigationOptions = {
        title: '設 定',
        headerTintColor: '#fff',
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
    };
    render() {
        return (

            <View style={styles.container}  >

                <View >
                    <SettingMenu navigation={this.props.navigation}/>
                </View>

            </View>




        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',

    },
})
export default SettingHomeScreen;