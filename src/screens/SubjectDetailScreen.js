import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';
import CircleButton from '../elements/CircleButton';
import firebase from 'firebase';


class SubjectDetailScreen extends React.Component {
  static navigationOptions = {
    title: '講義詳細',
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
    attendance: 0,
    absence: 0,
    cancell: 0,
    name: '',
    number: 0,
    room: '',
    tag: '',
    key: '',
    class: '',
    count: 0,

  }
  attendanceUp = () => {
    this.setState({
      attendance: this.state.attendance + 1
    });
  }
  absenceUp = () => {
    this.setState({
      absence: this.state.absence + 1
    });
  }
  cancellUp = () => {
    this.setState({
      cancell: this.state.cancell + 1
    });
  }
  attendanceDown = () => {
    if (this.state.attendance != 0)
      this.setState({ attendance: this.state.attendance - 1 });

  }
  absenceDown = () => {
    if (this.state.absence != 0)
      this.setState({ absence: this.state.absence - 1 });

  }
  cancellDown = () => {
    if (this.state.cancell != 0)
      this.setState({ cancell: this.state.cancell - 1 });

  }
  componentWillMount() {
    const { params } = this.props.navigation.state;
    console.log(params.item);
    this.setState({
      name: params.item.name,
      number: params.item.number,
      room: params.item.room,
      tag: params.item.tag,
      attendance: params.item.attendance,
      absence: params.item.absence,
      cancell: params.item.cancell,
      key: params.item.key,
      class: params.item.class

    });

  }

  handlePress() {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    console.log(this.state.key);
    db.collection(`/users/${currentUser.uid}/${this.state.class}`).doc(this.state.key)
      .update({
        name: this.state.name,
        number: this.state.number,
        room: this.state.room,
        tag: this.state.tag,
        attendance: this.state.attendance,
        absence: this.state.absence,
        cancell: this.state.cancell,
      })
      .then(() => {
        const { navigation } = this.props;
        navigation.goBack();
      })
      .catch((error) => {
        console.log(error);
      })
  }


  render() {
    return (

      <View style={styles.container}  >
        <View style={styles.inline}>
          <Text style={styles.textformat}>講義名: </Text>
          <TextInput
            style={styles.inputformat}
            value={this.state.name}
            onChangeText={(text) => { this.setState({ name: text }); }}
          />
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={styles.textformat}>単位数: </Text>
          <TextInput
            style={styles.inputformat}
            value={this.state.number}
            onChangeText={(text) => { this.setState({ number: text }); }}
          />
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={styles.textformat}>教室　: </Text>
          <TextInput
            style={styles.inputformat}
            value={this.state.room}
            onChangeText={(text) => { this.setState({ room: text }); }}
          />
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={styles.textformat}>タグ　: </Text>
          <TextInput
            style={styles.inputformat}
            value={this.state.tag}
            onChangeText={(text) => { this.setState({ tag: text }); }}
          />
        </View>

        <View style={styles.inline}>
          <Text style={styles.textformat}>出 席 </Text>
          <Text style={styles.textformat}>欠 席 </Text>
          <Text style={styles.textformat}>休 講 </Text>

        </View>

        <View style={styles.inline}>
          <Text style={styles.counter}>{this.state.attendance}回</Text>
          <Text style={styles.counter} >{this.state.absence}回</Text>
          <Text style={styles.counter}>{this.state.cancell}回</Text>
        </View>

        <CircleButton color="white" style={{ width: 335 }} name="plus" onPress={this.attendanceUp} />
        <CircleButton color="white" style={{ width: 290 }} name="minus" onPress={this.attendanceDown} />
        <CircleButton color="white" style={{ width: 225 }} name="plus" onPress={this.absenceUp} />
        <CircleButton color="white" style={{ width: 180 }} name="minus" onPress={this.absenceDown} />
        <CircleButton color="white" style={{ width: 115 }} name="plus" onPress={this.cancellUp} />
        <CircleButton color="white" style={{ width: 70 }} name="minus" onPress={this.cancellDown} />


        <View style={{ top: 80 }}>
          <TouchableHighlight onPress={this.handlePress.bind(this)} style={styles.button} underlayColor='#ddd'>
            <Text style={styles.buttonTitle}>保存する</Text>
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
export default SubjectDetailScreen;
