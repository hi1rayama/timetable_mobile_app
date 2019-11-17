import React from 'react';
import { StyleSheet, View, TouchableHighlight, TouchableOpacity, Text, FlatList } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import firebase from 'firebase';


//AsyncStorage



class TimeTable extends React.Component {
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
                    <View style={styles.table3} ><Text style={styles.text} >{"1"}</Text></View>
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
                    <View style={styles.table3} ><Text style={styles.text} >{"1"}</Text></View>
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
                    <View style={styles.table3} ><Text style={styles.text} >{"1"}</Text></View>
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
                    <View style={styles.table3} ><Text style={styles.text} >{"1"}</Text></View>
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




