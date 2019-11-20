import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';
import firebase from 'firebase';
import { NavigationActions,StackActions } from 'react-navigation';
/**
 * メモ
 * stateで入力処理をする
 * setStateでテキストをstateの要素に代入
 * bindは中の要素を結びつける
 */

class LoginScreen extends React.Component {
    static navigationOptions= {
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
        email: 'iqos@example.com',
        password: 'u2xdf2w2',
    }
    
    handleSubmit() {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((user)=>{

            const resetAction=StackActions.reset({
                index:0,
                actions:[
                    NavigationActions.navigate({routeName:'TimeTable'}),

                ],
            });
            this.props.navigation.dispatch(resetAction);
            
        })
        .catch((error) =>{

            console.log(error);
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
                <TouchableHighlight onPress={this.handleSubmit.bind(this)} style={styles.button} >
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