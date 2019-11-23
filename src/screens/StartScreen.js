import React from 'react';
import { StyleSheet, View, Text,  TouchableHighlight } from 'react-native';
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



    async componentWillMount() {
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
                    number: '',
                    room: '',
                    tag: '',
                })
                    .then((dogRef) => {
                        console.log(dogRef.id);

                    })
                    .catch((error) => {
                        console.log(error);
                        this.props.navigation.navigate('TabNavigator');//エラー画面にする
                    });


            }
        }
        


    }

    handlePress(){
        const resetAction=StackActions.reset({
            index:0,
            actions:[
                NavigationActions.navigate({routeName:'TabNavigator'}),

            ],
        });
        this.props.navigation.dispatch(resetAction);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>登録が完了しました</Text>
                <TouchableHighlight onPress={this.handlePress.bind(this)} style={styles.button} underlayColor='#ddd'>
                    <Text style={styles.buttonTitle}>利用開始</Text>
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
    title: {
        backgroundColor: '#eee',
        height: 48,
        marginBottom: 16,
        borderColor: '#DDD',
        padding: 8,
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