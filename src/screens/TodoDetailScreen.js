import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
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

    render() {
        const { item } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.inline}>
                    <Text style={styles.textformat}>講義名: </Text>
        <Text style={styles.inputformat}>{this.state.name}</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.textformat}>タイトル: </Text>
                    <Text style={styles.inputformat}>{item.title}</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.textformat}>期限　: </Text>
                    <Text style={styles.inputformat}>{item.deadline}</Text>
                </View>
                <View style={styles.todoContent}>
                    <Text style={styles.todoBody}>
                       内容 {item.content}
                    </Text>
                </View>
            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 24

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
        backgroundColor: '#eee',
        height: 48,
        marginBottom: 16,
        borderColor: '#DDD',
        padding: 8,
        width: '70%',
        fontSize: 20,

    },
    todoBody:{
        lineHeight:20,
        fontSize:15,
    }, 
    todoContent: {
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#fff',
        flex: 1,

    },

});

export default TodoDetailScreen;