import React from 'react';
import { StyleSheet, View, TouchableHighlight, Text, FlatList } from 'react-native';
import firebase from 'firebase';


//AsyncStorage



class TimeTable extends React.Component {
    renderItem({ item }) {
        console.log('item', item);
        return (

            
            <TouchableHighlight onPress={() => { this.props.navigation.navigate('SubjectDetail', { item }); }} style={styles.table} underlayColor='#d3d3d3'>
                <View>
                    <Text style={[styles.text,{fontSize:17}]} >{item.name}</Text>
                    <Text style={[styles.text,{fontSize:10}]} >{item.room}</Text>
                </View>

            </TouchableHighlight>

        );
    }

    render() {
        return (
            <View style={styles.container}>

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
                        <FlatList data={this.props.oneList} horizontal scrollEnabled={ false }　renderItem={this.renderItem.bind(this)} />
                    </View>

                </View>

                <View style={styles.inline}>
                    <View style={styles.table3} ><Text style={styles.text} >{"2"}</Text></View>
                    <View>
                        <FlatList data={this.props.twoList} horizontal scrollEnabled={ false }　renderItem={this.renderItem.bind(this)} />
                    </View>

                </View>

                <View style={styles.inline}>
                    <View style={styles.table3} ><Text style={styles.text} >{"3"}</Text></View>
                    <View>
                        <FlatList data={this.props.threeList} horizontal　scrollEnabled={ false } renderItem={this.renderItem.bind(this)} />
                    </View>

                </View>

                <View style={styles.inline}>
                    <View style={styles.table3} ><Text style={styles.text} >{"4"}</Text></View>
                    <View>
                        <FlatList data={this.props.fourList} horizontal scrollEnabled={ false }　renderItem={this.renderItem.bind(this)} />
                    </View>

                </View>

                <View style={styles.inline}>
                    <View style={styles.table3} ><Text style={styles.text} >{"5"}</Text></View>
                    <View>
                        <FlatList data={this.props.fiveList} horizontal scrollEnabled={ false }　renderItem={this.renderItem.bind(this)} />
                    </View>

                </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 50, backgroundColor: '#fff' },
   text: {
        textAlign: 'center',
        fontSize: 20
    },
    table: {
        alignSelf: "flex-start",
        borderWidth: 1,
        borderColor: "#000",
        backgroundColor:"#d3d3d3",
        height: 110,
        width: 70,
        paddingTop:15



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
        height: 110,
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
        height: 110,
        width: 70,
        paddingRight: 1,
        flexDirection: 'row',
        paddingTop: 1,



    },
    inline: {
        flexDirection: 'row',
        paddingTop: 1,


    },
});

export default TimeTable;



/**
 * constructor(props) {
    super(props);

    const Button = (value) => (
        <TouchableHighlight onPress={() => { this.props.navigation.navigate('SubjectDetail') }} style={styles.button}>
            <Text >{value}</Text>

        </TouchableHighlight>

    );

    this.state = {
        tableHead: ['', '月', '火', '水', '木', '金'],
        tableTitle: ['1', '2', '3', '4', '5'],
        tableData: [
            [Button('\n\n'), Button('\n\n'), Button('\n\n'), Button('\n\n'), Button('ネットワーク論')],//1限
            [Button('\n\n'), Button('\n\n'), Button('ソフトウェア設計学'), Button('\n\n'), Button('\n\n')],//2
            [Button('\n\n'), Button('\n\n'), Button('プロジェクト演習'), Button('\n\n'), Button('\n\n')],//3
            [Button('\n\n'), Button('\n\n'), Button('\n\n'), Button('\n\n'), Button('メディア論')],//4
            [Button('\n\n'), Button('\n\n'), Button('OS論'), Button('\n\n'), Button('\n\n')]//5
        ]
    }
}



render() {
    const state = this.state;
    return (
        <View style={styles.container}>
            <Table borderStyle={{ borderWidth: 1 }}>
                <Row data={state.tableHead} flexArr={[1, 1, 1, 1, 1, 1]} style={styles.head} textStyle={styles.text} />

                <TableWrapper style={styles.wrapper}>
                    <Col data={state.tableTitle} style={styles.title} heightArr={[100, 100, 100, 100, 100]} flexArr={[0.5, 1, 1, 1, 1, 1]} textStyle={styles.text} />

                    <Rows data={state.tableData} flexArr={[1, 1, 1, 1, 1]} style={styles.row} textStyle={styles.text} />

                </TableWrapper>

            </Table>

        </View>

    );
}
}

const styles = StyleSheet.create({
container: { flex: 1, padding: 16, paddingTop: 95, backgroundColor: '#fff' },
head: { height: 40, backgroundColor: '#f1f8ff' },
wrapper: { flexDirection: 'row' },
title: { backgroundColor: '#f6f8fa' },
row: { height: 100 },
text: { textAlign: 'center' }


});
 *
 */




