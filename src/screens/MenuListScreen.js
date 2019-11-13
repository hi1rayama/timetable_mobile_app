import React from 'react';
import { StyleSheet, View } from 'react-native';

import Bar from '../elements/Bar';
import MenuList from "../conmponents/MenuList";


class MenuListScreen extends React.Component {
    static navigationOptions = {
        title: 'メニュー',
      };
    render() {
        return (

            <View style={styles.container}  >
                <View >
                    <MenuList navigation={this.props.navigation}/>
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