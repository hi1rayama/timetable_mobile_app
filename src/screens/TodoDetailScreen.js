import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import firebase from 'firebase';
//AsyncStorage


class TodoDetailScreen extends React.Component {
    state = {
        item:{},
        nameList:{},
    }
    componentWillMount() {
        const { params } = this.props.navigation.state;
        this.setState({ item: params.item });

    }
    
    render() {
        const { item } = this.state;
        return (
            <View style={styles.container}>
                <View >

                    <View style={styles.todoHeader}>
                        <View>
                            <Text style={styles.todoHeaderTitle}>{item.title}</Text>
                            <Text style={styles.todoHeaderDeadline}>{item.deadline}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.todoContent}>
                <Text style={styles.todobody}>
                        詳細：
                    </Text>
                    <Text style={styles.todobody}>
                        {item.content}
                    </Text>
                </View>
            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'

    },
    todoHeader: {
        height: 100,
        backgroundColor: '#17313C',
        justifyContent: 'center',
        padding: 10,

    },
    todoHeaderTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',

    },
    todoHeaderDeadline: {
        fontSize: 12,
        color: '#fff'

    },
    todoContent: {
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#fff',
        flex: 1,

    },
    todobody:{
        lineHeight:20,
        fontSize:15,
    }

});

export default TodoDetailScreen;