import React from 'react';
import { StyleSheet, View, TouchableHighlight, TouchableOpacity, Text, FlatList } from 'react-native';
import TimeTable from "../conmponents/TimeTable";
import CircleButton from '../elements/CircleButton';
import firebase from 'firebase';

class TimeTableScreen extends React.Component {
  static navigationOptions= {
    title: '時間割',
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
    oneList:[],
    twoList:[],
    threeList:[],
    fourList:[],
    fiveList:[]
  };
  
        componentWillMount(){
          const db=firebase.firestore();
         db.collection('/users/0UEjQ06EW0ezRbDZ0RAFj84Tja03/one')
         .onSnapshot((snapshot)=>{
             const tempList=[];
             snapshot.forEach((doc)=>{
              console.log(doc.id, " => ", doc.data());
              tempList.push({...doc.data(),key:doc.id,class:'one'})

             });
             this.setState({oneList:tempList});
         });
         db.collection('/users/0UEjQ06EW0ezRbDZ0RAFj84Tja03/two')
         .onSnapshot((snapshot)=>{
           const tempList=[];
             snapshot.forEach((doc)=>{
              console.log(doc.id, " => ", doc.data());
              tempList.push({...doc.data(),key:doc.id,class:'two'})

             });
             this.setState({twoList:tempList});
         });
         db.collection('/users/0UEjQ06EW0ezRbDZ0RAFj84Tja03/three')
         .onSnapshot((snapshot)=>{
           const tempList=[];
             snapshot.forEach((doc)=>{
              console.log(doc.id, " => ", doc.data());
              tempList.push({...doc.data(),key:doc.id,class:'three'})

             });
             this.setState({threeList:tempList});
         });
         db.collection('/users/0UEjQ06EW0ezRbDZ0RAFj84Tja03/four')
         .onSnapshot((snapshot)=>{
           const tempList=[];
             snapshot.forEach((doc)=>{
              console.log(doc.id, " => ", doc.data());
              tempList.push({...doc.data(),key:doc.id,class:'four'})

             });
             this.setState({fourList:tempList});
         });
         db.collection('/users/0UEjQ06EW0ezRbDZ0RAFj84Tja03/five')
         .onSnapshot((snapshot)=>{
           const tempList=[];
             snapshot.forEach((doc)=>{
              console.log(doc.id, " => ", doc.data());
              tempList.push({...doc.data(),key:doc.id,class:'five'})

             });
             this.setState({fiveList:tempList});
         });
      }




  render() {
    return (



      <View style={styles.container}  >
        <View style={styles.settingMenu} >
          <CircleButton color="white" style={styles.button} name="bars" />
          <TimeTable 
            oneList={this.state.oneList} 
            twoList={this.state.twoList} 
            threeList={this.state.threeList} 
            fourList={this.state.fourList} 
            fiveList={this.state.fiveList} 
            navigation={this.props.navigation} />
        </View>
      </View>





    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  settingMenu: {
    width: '95%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',

  },
  button: {
    height: 10,
    position: 'absolute',
    bottom: 200,
    right: 24,
    top: 10,
    paddingTop: 1

  },
})

export default TimeTableScreen;



/*class TimeTableScreen extends React.Component {
  static navigationOptions = {
    title: '時間割',
  };
  state = {
    oneList: [],
    twoList: [],
    item: {},
  }
  componentWillMount() {
    const db = firebase.firestore();
    db.collection('/users/0UEjQ06EW0ezRbDZ0RAFj84Tja03/one')
      .onSnapshot((snapshot) => {
        const tempList = [];
        snapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          tempList.push({ ...doc.data(), key: doc.id })

        });
        this.setState({ oneList: tempList });
      });
    db.collection('/users/0UEjQ06EW0ezRbDZ0RAFj84Tja03/two')
      .onSnapshot((snapshot) => {
        const tempList = [];
        snapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          tempList.push({ ...doc.data(), key: doc.id })

        });
        this.setState({ twoList: tempList });
      });
  }


  renderItem({ item }) {
    console.log('item', item);
    return (

      <TouchableHighlight onPress={() => { this.props.navigation.navigate('SubjectDetail', { item }); }} style={styles.table}>
        <View>
          <Text style={styles.text} >{item.name}</Text>
          <Text style={styles.text} >{item.room}</Text>
        </View>

      </TouchableHighlight>

    );
  }



  render() {
    return (



      <View style={styles.container}  >
        <View style={styles.settingMenu} >
          <View style={styles.inline}>
            <View style={styles.table4} ><Text style={styles.text} >{""}</Text></View>
            <View style={styles.table2} ><Text style={styles.text} >{"月"}</Text></View>
            <View style={styles.table2} ><Text style={styles.text}>{"火"}</Text></View>
            <View style={styles.table2} ><Text style={styles.text}>{"水"}</Text></View>
            <View style={styles.table2} ><Text style={styles.text}>{"木"}</Text></View>
            <View style={styles.table2} ><Text style={styles.text}>{"金"}</Text></View>
          </View>

          <View style={styles.inline}>
            <View style={styles.table3} ><Text style={styles.text} >{"1"}</Text></View>
            <View>
              <FlatList data={this.state.oneList} horizontal renderItem={this.renderItem.bind(this)} />
            </View>

          </View>

          <View style={styles.inline}>
            <View style={styles.table3} ><Text style={styles.text} >{"2"}</Text></View>
            <View>
              <FlatList data={this.state.twoList} horizontal renderItem={this.renderItem.bind(this)} />
            </View>

          </View>


          <View style={styles.inline}>
            <View style={styles.table3} ><Text style={styles.text} >{"3"}</Text></View>

            <TouchableHighlight onPress={() => { this.props.navigation.navigate('SubjectDetail') }} style={styles.table}>
              <Text style={styles.text} >{"1"}</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => { this.props.navigation.navigate('SubjectDetail') }} style={styles.table}>
              <Text style={styles.text} >{"1"}</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => { this.props.navigation.navigate('SubjectDetail') }} style={styles.table}>
              <Text style={styles.text} >{"1"}</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => { this.props.navigation.navigate('SubjectDetail') }} style={styles.table}>
              <Text style={styles.text} >{"1"}</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => { this.props.navigation.navigate('SubjectDetail') }} style={styles.table}>
              <Text style={styles.text} >{"1"}</Text>
            </TouchableHighlight>

          </View>
          <View style={styles.inline}>
            <View style={styles.table3} ><Text style={styles.text} >{"4"}</Text></View>
            <TouchableHighlight onPress={() => { this.props.navigation.navigate('SubjectDetail') }} style={styles.table}>
              <Text style={styles.text} >{"1"}</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => { this.props.navigation.navigate('SubjectDetail') }} style={styles.table}>
              <Text style={styles.text} >{"1"}</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => { this.props.navigation.navigate('SubjectDetail') }} style={styles.table}>
              <Text style={styles.text} >{"1"}</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => { this.props.navigation.navigate('SubjectDetail') }} style={styles.table}>
              <Text style={styles.text} >{"1"}</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => { this.props.navigation.navigate('SubjectDetail') }} style={styles.table}>
              <Text style={styles.text} >{"1"}</Text>
            </TouchableHighlight>

          </View>
          <View style={styles.inline}>
            <View style={styles.table3} ><Text style={styles.text} >{"5"}</Text></View>
            <TouchableHighlight onPress={() => { this.props.navigation.navigate('SubjectDetail') }} style={styles.table}>
              <Text style={styles.text} >{"1"}</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => { this.props.navigation.navigate('SubjectDetail') }} style={styles.table}>
              <Text style={styles.text} >{"1"}</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => { this.props.navigation.navigate('SubjectDetail') }} style={styles.table}>
              <Text style={styles.text} >{"1"}</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => { this.props.navigation.navigate('SubjectDetail') }} style={styles.table}>
              <Text style={styles.text} >{"1"}</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => { this.props.navigation.navigate('SubjectDetail') }} style={styles.table}>
              <Text style={styles.text} >{"1"}</Text>
            </TouchableHighlight>

          </View>
        </View>
      </View>





    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, padding: 16, paddingTop: 20, backgroundColor: '#fff'
  },
  settingMenu: {
    width: '95%',
    flex: 1,
    flexDirection: 'column',

  },
  button: {
    height: 10,
    position: 'absolute',
    bottom: 200,
    right: 24,
    top: 10,
    paddingTop: 1

  },

  table: {
    alignSelf: "flex-start",
    borderWidth: 1,
    borderColor: "#000",
    height: 100,
    width: 70,
    paddingRight: 1,



  },
  table2: {
    alignSelf: "flex-start",
    borderWidth: 1,
    borderColor: "#000",
    height: 25,
    width: 70,

  },
  table3: {
    alignSelf: "flex-start",
    borderWidth: 1,
    borderColor: "#000",
    height: 100,
    width: 20,


  },
  table4: {
    alignSelf: "flex-start",
    borderWidth: 1,
    borderColor: "#000",
    height: 25,
    width: 20,

  },
  table5: {
    alignSelf: "flex-start",
    borderWidth: 1,
    borderColor: "#000",
    height: 100,
    width: 70,
    paddingRight: 1,
    flexDirection: 'row',
    paddingTop: 1,



  },
  inline: {
    flexDirection: 'row',
    paddingTop: 1,


  },
  text: {
    textAlign: 'center',
    fontSize: 20
  },
})


*/