import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Bar from '../elements/Bar';
import SettingMenu from '../conmponents/SettingMenu';


class SettingHomeScreen extends React.Component {
    static navigationOptions = {
        title: '設 定',
      };
    render() {
        return (

            <View style={styles.container}  >

                <View >
                    <SettingMenu />
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