import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Bar from '../elements/Bar';
import SettingMenu from '../conmponents/SettingMenu';


class SettingHomeScreen extends React.Component {
    render() {
        return (

            <View style={styles.container}  >
                <View >
                    <Bar name='設  定' />
                </View>

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