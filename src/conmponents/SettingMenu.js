import React from 'react';
import {StyleSheet,View,Text} from 'react-native';


class SettingMenu extends React.Component{
    render(){
        return(
            <View style={styles.settingList} >
                     <View style={styles.settingMenuItem}>
                        <Text style={styles.settingTitle}>時間割の設定</Text>
                    </View>

                    <View style={styles.settingMenuItem}>
                        <Text style={styles.settingTitle}>現状の設定</Text>
                    </View>

                    <View style={styles.settingMenuItem}>
                        <Text style={styles.settingTitle}>タグの追加</Text>
                    </View>
                    <View style={styles.settingMenuItem}>
                        <Text style={styles.settingTitle}>ログアウト</Text>
                    </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    settingList:{
        flexDirection:'column',

    },
      settingMenuItem:{
        width:'100%',
        padding:16,
        borderBottomWidth:1,
        borderBottomColor:'#ddd',
      },
      settingTitle:{
          width:'100%',
        fontSize:30,
        marginBottom: 4,
    
      },

})




export default SettingMenu;
