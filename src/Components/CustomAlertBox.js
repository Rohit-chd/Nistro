import React, { Component } from 'react';
import { TouchableHighlight, View, StyleSheet, Text, TouchableOpacity, Platform } from 'react-native';
import { Dialog, ConfirmDialog } from 'react-native-simple-dialogs';
//import { platform } from 'os';

class CustomAlertBox extends Component {

    render() {
        const { content, message, buttonContainer, dialog } = alertStyles;
        return (
            <Dialog
                dialogStyle={dialog}
                contentStyle={content}
                visible={true}
                onTouchOutside={this.props.onTouchOutside}
                backfaceVisibility='hidden'
                overlayStyle={{ backgroundColor: 'transparent' }}
            >
                <Text style={message}>
                    Hello
                </Text>
                <View style={buttonContainer}>
                    {this.props.children}
                </View>
            </Dialog>
        )

    }
}

const alertStyles = StyleSheet.create({
    content: {
        alignItems: "center",
        backgroundColor: 'white',
        marginTop: 10,
        borderRadius: 10
    },
    dialog: {
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent : 'center',
        backgroundColor: Platform.OS === 'ios' ? 'transparent' : 'white',
        //elevation : 1
    },
    message: {
        alignSelf: 'center', textAlign: 'center',
        color: 'rgb(32, 39, 47)',
        fontFamily: 'Montserrat-Light', fontSize: 18,
        backgroundColor: 'white',
        alignSelf: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom :  Platform.OS === 'ios' ? 0 : -40,
        backgroundColor: 'white',
        flexWrap: 'wrap'
    }
})



export default CustomAlertBox;

export class DialogButton extends Component {

    render() {
        const { button } = dialogStyle;
        const {
            buttonTitle,
            onPress,
            containerStyle,
            textStyle,
        } = this.props;
        return (
            <TouchableOpacity
                style={[button, containerStyle]}
                onPress={this.props.onPress}
            >
                <Text
                    style={[{
                        color: 'rgb(17, 116, 242)', textAlign: 'center',
                        fontFamily: 'Montserrat-Light', fontSize: 14
                    },
                        textStyle]}
                >
                    {buttonTitle}
                </Text>
            </TouchableOpacity>
        );
    }
}

const dialogStyle = StyleSheet.create({
    button: {
        borderColor: 'rgba(186, 195, 201, 0.5)', borderWidth: 1,
        alignContent: 'center', justifyContent: 'center',
        height: 40, paddingLeft: 10, paddingRight: 10,
        minWidth: 80, borderRadius: 2,backgroundColor: 'white',
        marginRight: 10, marginTop: 10
    }
});