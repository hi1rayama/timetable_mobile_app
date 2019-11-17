import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import SubjectDetail from "../conmponents/SubjectDetail";
import CircleButton from '../elements/CircleButton';
import firebase from 'firebase';


class SubjectDetailScreen extends React.Component {
  static navigationOptions = {
    title: '講義詳細',
  };
  state = {
    attendance: 0,
    absence: 0,
    cancell: 0,
    name: '',
    number: 0,
    room: '',
    tag: '',
    key:'',
    class:'',

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
      cancel: params.item.cancell,
      key:params.item.key,
      class:params.item.class

    });

  }

  handlePress() {
    const db = firebase.firestore();
    console.log(this.state.key);
    db.collection(`/users/0UEjQ06EW0ezRbDZ0RAFj84Tja03/${this.state.class}`).doc(this.state.key)
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
        <Text >現在の出席:{this.state.attendanceCount}</Text>
        <View style={styles.inline}>
          <Text style={styles.textformat}>講義名: </Text>
          <TextInput
            style={styles.inputformat}
            value={this.state.name}
            onChangeText={(text) => { this.setState({ name: text }); }}
          />
        </View>

        <View style={styles.inline}>
          <Text style={styles.textformat}>単位数: </Text>
          <TextInput
            style={styles.inputformat}
            value={this.state.number}
            onChangeText={(text) => { this.setState({ number: text }); }}
          />
        </View>

        <View style={styles.inline}>
          <Text style={styles.textformat}>教室　: </Text>
          <TextInput
            style={styles.inputformat}
            value={this.state.room}
            onChangeText={(text) => { this.setState({ room: text }); }}
          />
        </View>

        <View style={styles.inline}>
          <Text style={styles.textformat}>タグ　: </Text>
          <TextInput
            style={styles.inputformat}
            value={this.state.tag}
            onChangeText={(text) => { this.setState({ tag: text }); }}
          />
        </View>

        <View style={styles.inline2}>
          <Text style={styles.textformat}>出 席</Text>
          <Text style={styles.textformat}>欠 席</Text>
          <Text style={styles.textformat}>休 講</Text>

        </View>
        <View style={styles.inline2}>
    <Text style={styles.inputformat2}>{this.state.attendance}回</Text>
    <Text style={styles.inputformat2} >{this.state.absence}回</Text>
    <Text style={styles.inputformat2}>{this.state.cancell}回</Text>
        </View>


        <CircleButton color="white" style={{ width: 335 }} name="plus" />
        <CircleButton color="white" style={{ width: 290 }} name="minus" onPress={ this.handlePress.bind(this)} />
        <CircleButton color="white" style={{ width: 225 }} name="plus" onPress={() => { this.props.navigation.navigate('TimeTable') }} />
        <CircleButton color="white" style={{ width: 180 }} name="minus" onPress={() => { this.props.navigation.navigate('TimeTable') }} />
        <CircleButton color="white" style={{ width: 115 }} name="plus" onPress={() => { this.props.navigation.navigate('TimeTable') }} />
        <CircleButton color="white" style={{ width: 70 }} name="minus" onPress={() => { this.props.navigation.navigate('TimeTable') }} />


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
    flexDirection: 'row',

  },

  inline2: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    paddingTop: 15,

  },
  textformat: {
    fontSize: 30,

  },
  inputformat: {
    backgroundColor: '#eee',
    height: 48,
    marginBottom: 16,
    borderColor: '#DDD',
    padding: 8,
    width: '70%',
    fontSize: 20,

  },
  inputformat2: {
    backgroundColor: '#eee',
    height: 48,
    marginBottom: 16,
    borderColor: '#DDD',
    padding: 8,
    width: 80,
    fontSize: 20,
    textAlign: 'center',

  },
})
export default SubjectDetailScreen;


/**
 * return(

                <View style={styles.container}  >
                    <View style={styles.settingMenu}>
                     <Text >現在の出席:{this.state.attendanceCount}</Text>
                    <SubjectDetail detail={this.state.detail} />

                    </View>
                    <CircleButton color="white" style={{width:335}} name="plus" onPress={} />
                    <CircleButton color="white" style={{width:290}} name="minus" onPress={() => {this.props.navigation.navigate('TimeTable')}} />
                    <CircleButton color="white" style={{width:225}} name="plus" onPress={() => {this.props.navigation.navigate('TimeTable')}} />
                    <CircleButton color="white" style={{width:180}} name="minus" onPress={() => {this.props.navigation.navigate('TimeTable')}} />
                    <CircleButton color="white" style={{width:115}} name="plus" onPress={() => {this.props.navigation.navigate('TimeTable')}} />
                    <CircleButton color="white" style={{width:70}} name="minus" onPress={() => {this.props.navigation.navigate('TimeTable')}} />


                </View>




        );
 */