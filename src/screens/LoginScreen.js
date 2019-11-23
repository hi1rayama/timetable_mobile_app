import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import { NavigationActions, StackActions } from 'react-navigation';
/**
 * メモ
 * stateで入力処理をする
 * setStateでテキストをstateの要素に代入
 * bindは中の要素を結びつける
 */

class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'ログイン',
        headerTintColor: '#fff',
        headerStyle: {
            backgroundColor: '#00aaff',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.5,
            shadowRadius: 3,
            zIndex: 10,
        },
        headerTitleStyle: {
            color: '#fff',
            fontSize: 24,
            fontWeight: 'bold',
        }
    };
    state = {
        email: '',
        password: '',
    }

    //ログイン処理
    handleSubmit() {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                const resetAction = StackActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({ routeName: 'TabNavigator' }),

                    ],
                });
                this.props.navigation.dispatch(resetAction);

            })
            .catch((error) => {

                console.log(error);
            })
    };

    //新規登録画面へ移動
    handlePress() {
        this.props.navigation.navigate('Sign');
    }

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
                <TouchableHighlight onPress={this.handleSubmit.bind(this)} style={styles.button} >
                    <Text style={styles.buttonTitle}>ログインする</Text>
                </TouchableHighlight>

                <TouchableOpacity style={styles.signup} onPress={this.handlePress.bind(this)}>
                    <Text style={styles.signupText}>新規ユーザー作成</Text>

                </TouchableOpacity>

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
        borderRadius: 15,
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
    },
    signup: {
        marginTop: 16,
        alignSelf: 'center',
    },
    signupText: {
        fontSize: 16,
    }


});

export default LoginScreen;