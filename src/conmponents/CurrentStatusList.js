import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

import CurrentStatus from '../elements/CurrentStatus';



class CurrentStatisList extends React.Component {
    render() {
        return (
            <View style={styles.statusList} >
                <CurrentStatus name='・卒業要件単位数' number='130' />
                <CurrentStatus name='・暫定総取得単位数' number='100' />
                <CurrentStatus name='・確定総取得単位数' number='90' />
                <CurrentStatus name='・暫定の残り単位数' number='30' />
                <CurrentStatus name='・確定の残り単位数 ' number='40' />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    statusList: {
        letterSpacing: 1,
        paddingTop: 90,
    }

})

export default CurrentStatisList;