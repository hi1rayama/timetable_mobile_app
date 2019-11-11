import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Bar from '../elements/Bar';
import CurrentStatusList from "../conmponents/CurrentStatusList";


class CurrentStatusListScreen extends React.Component {
    render() {
        return (

            <View style={styles.container}  >
                <View >
                    <Bar name='現　状' />
                </View>

                <View >
                    <CurrentStatusList />
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
export default CurrentStatusListScreen;