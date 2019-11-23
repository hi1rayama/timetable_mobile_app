import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';
import firebase from 'firebase';
import { NavigationActions,StackActions } from 'react-navigation';

class SignupScreen extends React.Component {
    static navigationOptions = {
        title: '新規登録',
    };
    state = {
        email: '',
        password: '',
    };

    handleSubmit() {
        //SinUp!!
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((user) => {
                const resetAction=StackActions.reset({
                    index:0,
                    actions:[
                        NavigationActions.navigate({routeName:'Start'}),
    
                    ],
                });
                this.props.navigation.dispatch(resetAction);
            })
            .catch((error) => {
                console.log(error);

            });
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input}
                    value={this.state.email}
                    onChangeText={(text) => { this.setState({ email: text }); }}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Emall Address"
                />
                <TextInput style={styles.input}
                    value={this.state.password}
                    onChangeText={(text) => { this.setState({ password: text }); }}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Password"
                    secureTextEntry
                />
                <TouchableHighlight onPress={this.handleSubmit.bind(this)} style={styles.button} underlayColor='#ddd'>
                    <Text style={styles.buttonTitle}>送信する</Text>
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
        borderRadius: 15,
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