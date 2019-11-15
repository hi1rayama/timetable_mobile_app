import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';
/**
 * メモ
 * stateで入力処理をする
 * setStateでテキストをstateの要素に代入
 * bindは中の要素を結びつける
 */

class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'ログイン',
      };
    state = {
        email: 'email-address',
        password: 'password',
    };
    
    handleSubmit() {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((user)=>{
            this.props.navigation.navigate('TimeTable');
        })
        .catch((error) =>{

        })
    };

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    value={this.state.email}
                    onChangeText={(text) => { this.setState({ email: text }); }}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Emall Address"

                />
                <TextInput
                    style={styles.input}
                    value={this.state.password}
                    onChangeText={(text) => { this.setState({ password: text }); }}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Password"
                    secureTextEntry


                />
                <TouchableHighlight onPress={()=>{this.props.navigation.navigate('TimeTable');}} style={styles.button} >
                    <Text style={styles.buttonTitle}>ログインする</Text>
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

export default LoginScreen;