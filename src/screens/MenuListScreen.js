import React from 'react';
import { StyleSheet, View } from 'react-native';

import Bar from '../elements/Bar';
import MenuList from "../conmponents/MenuList";


class MenuListScreen extends React.Component {
    render() {
        return (

            <View style={styles.container}  >
                <View >
                    <Bar name='Menu' />
                </View>

                <View >
                    <MenuList />
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
export default MenuListScreen;