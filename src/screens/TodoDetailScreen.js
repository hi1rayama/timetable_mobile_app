import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import firebase from 'firebase';
//AsyncStorage


class TodoDetailScreen extends React.Component {
    state = {
        item: {},
        nameList: {},
        name: ''
    }
    componentWillMount() {
        const { params } = this.props.navigation.state;
        this.setState({ item: params.item });
        const db = firebase.firestore();
        console.log(params.item.name_key);
        const { currentUser } = firebase.auth();
        db.collection(`/users/${currentUser.uid}/${params.item.class}`).doc(params.item.name_key)
            .get()
            .then((doc) => {
                console.log(doc.data());
                this.setState({ name: doc.data().name });
                console.log(this.state.name);


            })
            .catch((error) => {
                console.log(error);
            })
    }

    handlePress() {
        this.props.navigation.navigate('TodoEdit',{item:this.state.item});//エラー画面にする
  
      }
    

    render() {
        const { item } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.inline}>

                    <Text style={styles.inputformat}>講義名: {this.state.name}</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.inputformat}>タイトル: {item.title}</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.inputformat}>期限　:{item.deadline}</Text>
                </View>
                <View style={styles.todoContent} >
                    <Text style={styles.todoBody}>
                        {item.content}
                    </Text>
                </View>
                <View style={{ top: 20 }}>
                    <TouchableHighlight onPress={this.handlePress.bind(this)} style={styles.button} underlayColor='#ddd'>
                        <Text style={styles.buttonTitle}>編集</Text>
                    </TouchableHighlight>
                </View>
            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 24,
        paddingBottom: 100,

    }, inline: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        paddingTop: 15,


    },
    textformat: {
        fontSize: 30,


    },
    inputformat: {
        borderRadius: 15,
        backgroundColor: '#e0ffff',
        height: 48,
        marginBottom: 16,
        borderColor: '#DDD',
        padding: 8,
        width: '100%',
        fontSize: 20,
        borderRadius: 15,
        overflow: "hidden"//TextでborderRadiusを使用する場合はこれが必須

    },
    todoBody: {
        lineHeight: 20,
        fontSize: 25,
        paddingTop: 10

    },
    todoContent: {
        paddingTop: 15,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#e0ffff',
        flex: 1,
        borderRadius: 15,

    },
    button: {
        backgroundColor: '#00008b',
        height: 48,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',//ボタンの中をセンターに
        width: 100,
        alignSelf: 'center',//ボタンの外をセンターに
    },
    buttonTitle: {
        color: '#fff',
        fontSize: 18,
    },

});

export default TodoDetailScreen;