import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';


class SubjectDetail extends React.Component {
    render() {
        return (
            <View >
                <View style={styles.inline}>
                    <Text style={styles.textformat}>講義名: </Text>
                    <TextInput style={styles.inputformat}>OS論</TextInput>
                </View>

                <View style={styles.inline}>
                    <Text style={styles.textformat}>単位数: </Text>
                    <TextInput style={styles.inputformat}>2</TextInput>
                </View>

                <View style={styles.inline}>
                    <Text style={styles.textformat}>教室 : </Text>
                    <TextInput style={styles.inputformat}>101</TextInput>
                </View>

                <View style={styles.inline}>
                    <Text style={styles.textformat}>タグ : </Text>
                    <TextInput style={styles.inputformat}>必修科目</TextInput>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    inline: {
        flexDirection: 'row',
    },
    textformat: {
        fontSize: 30,

    },
    inputformat: {
        fontSize: 30,
        borderColor: 'gray',
        backgroundColor: 'red',

    }
})

export default SubjectDetail;