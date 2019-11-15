import React from 'react';
import { StyleSheet, View ,TouchableHighlight } from 'react-native';
import * as Font from 'expo-font';
import { createIconSet } from '@expo/vector-icons';

import fontAwsome from '../../assets/fonts/fa-solid-900.ttf';

const CustomIcon = createIconSet({//カスタムのアイコンの集合
    plus: '\uf067',
    minus:'\uf068',
    bars:'\uf0c9',
}, 'FontAwsome');

class CircleButton extends React.Component {

    state = {
        fontLoaded: false,
    }

    async componentWillMount() {//クラウドからアプリが開かれたらロードする
        await Font.loadAsync({
            FontAwsome: fontAwsome,
        });

        this.setState({ fontLoaded: true });
    }

    render() {
        const { name, style, color, onPress } = this.props;//これによりstyleのプロパティにアクセスできる
        let bgColor = '#E31676';//constは後で変更できない. letは後でも変更できる
        let textColor = '#FFF';
        if (color === 'white') {
            bgColor = '#fff';
            textColor = '#00008b';
        }
        return (//返すコンポーネントは必ず1つだけつまり、1つのViewでしか返せない
            //最初にstyles.CircleButtonで次にstyleを上書きする
            <TouchableHighlight style={[styles.container, style]} onPress={onPress}>

                <View style={[styles.CircleButton,{ backgroundColor: bgColor }]}>
                    {
                        this.state.fontLoaded ? (
                            <CustomIcon name={this.props.name} style={[styles.CircleButtonTitle,{color:textColor}]} />

                        ) : null
                    }
                </View>
            </TouchableHighlight>


        );
    }
}
const styles = StyleSheet.create({
    container: {
        height:48,
        position: 'absolute',
        bottom: 24,
        right: 24,
        top:400,
        paddingTop:15

    },
    CircleButton: {
        width: 35,
        height: 35,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,

    },
    CircleButtonTitle: {
        fontFamily: 'FontAwsome',
        fontSize: 20,
        lineHeight: 32,


    },


})
export default CircleButton;