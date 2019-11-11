import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';


class MenuList extends React.Component {
    render() {
        return (
            <View style={styles.menuList}>
                <View style={styles.menuListItem}>
                    <Text style={styles.menuName}>設定</Text>
                </View>

                <View style={styles.menuListItem}>
                    <Text style={styles.menuName}>現状</Text>
                </View>

                <View style={styles.menuListItem}>
                    <Text style={styles.menuName}>TODO</Text>

                </View>

                <View style={styles.menuListItem}>
                    <Text style={styles.menuName}>時間割</Text>

                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    menuList: {
        flexDirection: 'column',
        paddingTop: 90,

    },
    menuListItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    menuName: {
        fontSize: 25,
        marginBottom: 4,
    }

})

export default MenuList;