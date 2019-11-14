import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';


class SignupScreen extends React.Component {
    static navigationOptions = {
        title: '新規登録',
      };
    state = {
        email: 'email-address',
        password: 'password',
    }
    /**
    handleSubmit() {
            this.props.navigation.navigate('Home');
        //this.props.navigation.navigate('Home');
        //Login!!
    }
    */

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    value={this.state.email}
                />
                <TextInput
                    style={styles.input}
                    value={this.state.password}


                />
                <TouchableHighlight onPress={()=>{this.props.navigation.navigate('TimeTable');}} style={styles.button} >
                    <Text style={styles.buttonTitle}>登録する</Text>
                </TouchableHighlight>

            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,//スクリーンいっぱいに広げる
        width: '100%',
        padding: 24,
        backgroundColor: '#fff'
    },
    input: {
        backgroundColor: '#eee',
        height: 48,
        marginBottom: 16,
        borderColor: '#DDD',
        padding: 8,
    },
    title: {
        fontSize: 32,
        alignSelf: 'center',//中央にする
        marginBottom: 24,
    },
    button: {
        backgroundColor: '#00008b',
        height: 48,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',//ボタンの中をセンターに
        width: '70%',
        alignSelf: 'center',//ボタンの外をセンターに
    },
    buttonTitle: {
        color: '#fff',
        fontSize: 18,
    }


});

export default SignupScreen;