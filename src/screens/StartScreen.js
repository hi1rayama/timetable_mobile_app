import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';
import firebase from 'firebase';


class SignupScreen extends React.Component {
    static navigationOptions = {
        title: '新規登録',
    };
    state = {
        email: '',
        password: '',
    };



    componentWillMount() {
        const num = ["one", "two", "three", "four", "five"];
        const { currentUser } = firebase.auth();
        const db = firebase.firestore();
        for (let j = 0; j < 5; j++) {
            for (let i = 0; i < 5; i++) {
                db.collection(`/users/${currentUser.uid}/${num[j]}`).add({
                    attendance: 0,
                    absence: 0,
                    cancell: 0,
                    name: '',
                    number: 0,
                    room: '',
                    tag: '',
                })
                    .then((dogRef) => {
                        console.log(dogRef.id);

                    })
                    .catch((error) => {
                        console.log(error);
                        this.props.navigation.navigate('TimeTable');//エラー画面にする
                    });


            }
        }


    }

    handlePress(){
        this.props.navigation.navigate('TimeTable');
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.input}>{this.state.email}</Text>
                <Text style={styles.input}>{this.state.password}</Text>
                <TouchableHighlight onPress={this.handlePress.bind(this)} style={styles.button} underlayColor='#ddd'>
                    <Text style={styles.buttonTitle}>始める</Text>
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