import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

const state = {
    tableHead: ['', '月', '火', '水', '木', '金'],
    tableTitle: ['1', '2', '3', '4', '5'],
    tableData: [
        ['', '', '', '', 'ネットワーク論'],
        ['', '', 'ソフトウェア設計学', '', ''],
        ['', '', 'プロジェクト演習', '', ''],
        ['', '', '', '', 'メディア論'],
        ['', '', 'OS論', '', '']
    ]
}


class TimeTable extends React.Component {
    render() {
        return (
            <View >
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
export default TimeTable;