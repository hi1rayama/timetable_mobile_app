import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';
import CircleButton from '../elements/CircleButton';
import firebase from 'firebase';


class TodoScreen extends React.Component {
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
    content:'',
    deadline:'',

  }
  

  handlePress() {
  }


  render() {
    return (

      <View style={styles.container}  >
        <View style={styles.inline}>
          <Text style={styles.textformat}>タイトル: </Text>
          <TextInput
            style={styles.inputformat}
          />
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={styles.textformat}>内容　: </Text>
          <TextInput
            style={styles.inputformat}
          />
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={styles.textformat}>期限　: </Text>
          <TextInput
            style={styles.inputformat}
          />
          </View>

        <View style={{ top: 80 }}>
          <TouchableHighlight  style={styles.button} underlayColor='#ddd'>
            <Text style={styles.buttonTitle}>追加する</Text>
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
export default TodoScreen;
