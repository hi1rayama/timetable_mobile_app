import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';


class SubjectDetail extends React.Component {
    render() {
        return (
            <View style={styles.container} >
                <View style={styles.inline}>
                    <Text style={styles.textformat}>講義名: </Text>
                    <TextInput style={styles.inputformat}>OS論</TextInput>
                </View>

                <View style={styles.inline}>
                    <Text style={styles.textformat}>単位数: </Text>
                    <TextInput style={styles.inputformat}>2</TextInput>
                </View>

                <View style={styles.inline}>
                    <Text style={styles.textformat}>教室　: </Text>
                    <TextInput style={styles.inputformat}>101</TextInput>
                </View>

                <View style={styles.inline}>
                    <Text style={styles.textformat}>タグ　: </Text>
                    <TextInput style={styles.inputformat}>必修科目</TextInput>
                </View>

                <View style={styles.inline2}>
                    <Text style={styles.textformat}>出 席</Text>
                    <Text style={styles.textformat}>欠 席</Text>
                    <Text style={styles.textformat}>休 講</Text>

                </View>
                <View style={styles.inline2}>
                    <TextInput style={styles.inputformat2}>1回</TextInput>
                    <TextInput style={styles.inputformat2} >2回</TextInput>
                    <TextInput style={styles.inputformat2}>2回</TextInput>
                </View>




            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,//スクリーンいっぱいに広げる
        width: '100%',
        padding: 24,
        backgroundColor: '#fff'

    },
    inline: {
        flexDirection: 'row',

    },

    inline2: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        paddingTop:15,

    },
    textformat: {
        fontSize: 30,

    },
    inputformat: {
        backgroundColor: '#eee',
        height: 48,
        marginBottom: 16,
        borderColor: '#DDD',
        padding: 8,
        width: '70%',
        fontSize:20,

    },
    inputformat2: {
        backgroundColor: '#eee',
        height: 48,
        marginBottom: 16,
        borderColor: '#DDD',
        padding: 8,
        width: 80,
        fontSize:20,
        textAlign: 'center',

    },
    button: {
        width: '100%',
        paddingLeft: 25,
        paddingTop: 20,
    }
})

export default SubjectDetail;