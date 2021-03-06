import React from 'react';
import {StyleSheet, View,Text,ActivityIndicator} from 'react-native';

const Loading=(props)=>{
    const {text,isLoading}=props;
    if (!isLoading){
        return null;
    }

    return(
        <View style={styles.container}>
        <ActivityIndicator/>
        <Text style={styles.text}>{text}</Text>
        </View>
    );
};

const styles=StyleSheet.create({
    container:{
        position:'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0,
        backgroundColor:'#DDDDDD',
        zIndex:100,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:40,

    },
    text:{
        fontSize:16,
    }
});


export default Loading;