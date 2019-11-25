import React from 'react';
import {StyleSheet,View} from 'react-native';
import TodoList from '../conmponents/TodoList';
import firebase from 'firebase';

class TodoListScreen extends React.Component{
    static navigationOptions= {
        title: 'TODO',
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
    state={
        todoList:[],
    }
    componentWillMount(){
        const {currentUser}=firebase.auth();
        const db=firebase.firestore();
       db.collection(`users/${currentUser.uid}/todo`)
       .onSnapshot((snapshot)=>{
           const todoList=[];
           snapshot.forEach((doc)=>{
               todoList.push({...doc.data(),key:doc.id});

           });
           this.setState({todoList});
       });
       

    }
    render(){
        return(
            <View style={styles.container}>
                <TodoList todoList={this.state.todoList} navigation={this.props.navigation} />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,//スクリーンいっぱいに広げる
      width:'100%',
      backgroundColor:'#FFFDF6',
    },
  
  });

export default TodoListScreen;