import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';
import CircleButton from '../elements/CircleButton';
import firebase from 'firebase';


class TodoEditScreen extends React.Component {
  static navigationOptions = {
    title: 'Todo',
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
    title:'',
    content:'',
    deadline:'',
    key:'',
    class:''

  }
  componentWillMount() {
    const { params } = this.props.navigation.state;
    console.log(params.item);
    this.setState({
      title:params.item.title,
      content:params.item.content,
      deadline:params.item.deadline,
      key: params.item.key,
      class: params.item.class

    });

  }
  

  handlePress() {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    db.collection(`/users/${currentUser.uid}/todo/`).update({
      class:this.state.class,
      name_key:this.state.key,
      title:this.state.title,
      content:this.state.content,
      deadline:this.state.deadline
  })
      .then((dogRef) => {
          console.log(dogRef.id);
          const { navigation } = this.props;
           navigation.goBack();

      })
      .catch((error) => {
          console.log(error);
          this.props.navigation.navigate('TabNavigator');//エラー画面にする
      });
  }


  render() {
    return (

      <View style={styles.container}  >
        <View style={styles.inline}>
          <Text style={styles.textformat}>タイトル:</Text>
          <TextInput
            style={styles.inputformat}
            value={this.state.title}
            onChangeText={(text) => { this.setState({ title: text }); }}
          />
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={styles.textformat}>内容　: </Text>
          <TextInput
            style={styles.inputformat}
            value={this.state.content}
            onChangeText={(text) => { this.setState({ content: text }); }}
          />
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={styles.textformat}>期限　: </Text>
          <TextInput
            style={styles.inputformat}
            value={this.state.deadline}
            onChangeText={(text) => { this.setState({ deadline: text }); }}
          />
          </View>

        <View style={{ top: 20 }}>
          <TouchableHighlight onPress={this.handlePress.bind(this)} style={styles.button} underlayColor='#ddd'>
            <Text style={styles.buttonTitle}>更新</Text>
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
  },

  inline: {
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
  counter: {
    backgroundColor: '#eee',
    height: 48,
    marginBottom: 16,
    borderColor: '#DDD',
    padding: 8,
    width: 80,
    fontSize: 20,
    textAlign: 'center',
    borderRadius: 15,
    overflow: "hidden"//TextでborderRadiusを使用する場合はこれが必須


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
})
export default TodoEditScreen;
