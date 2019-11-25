import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight,FlatList } from 'react-native';


class TodoList extends React.Component {
  renderTodo({item}) {
    console.log(item);
    return (

      <TouchableHighlight onPress={() => { this.props.navigation.navigate('TodoDetail',{item}) }}>
        <View style={styles.todoListItem}>
    <Text style={styles.todoTitle}>{item.title}</Text>
    <Text style={styles.todoDate}>期限:{item.deadline}</Text>
        </View>
      </TouchableHighlight>

    );
  }
  render() {
    return (
      <View style={styles.todoList}>
        <FlatList data={this.props.todoList} renderItem={this.renderTodo.bind(this)} />
      </View>


    );
  }
}
const styles = StyleSheet.create({
  todoList: {
    width: '100%',
    flex: 1,


  },
  todoListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  todoTitle: {
    fontSize: 18,
    marginBottom: 4,

  },
  todoDate: {
    fontSize: 12,
    color: '#a2a2a2',
  },

})
export default TodoList;