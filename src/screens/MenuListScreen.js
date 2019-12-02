import React from 'react';
import { StyleSheet, View ,Text} from 'react-native';

class MenuListScreen extends React.Component {
    
    render() {
        return (

            <View style={styles.container}  >
                <View style={styles.menuListItem}>
                        <Text style={styles.menuName}>未実装</Text>
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
export default MenuListScreen;