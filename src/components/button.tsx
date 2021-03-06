import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

interface FlatButtonProps {
    text: string,
    onPress: Function,
    style?: Object
}

export const FlatButton = ({ text, onPress, style }: FlatButtonProps) => {
    return (
        <TouchableOpacity style={{ ...styles.button, ...style }} onPress={() => onPress()}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

export const styles = StyleSheet.create({
    button: {
        backgroundColor: '#EF476F',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 10,
        marginHorizontal: 20,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        fontFamily: 'nunito-bold',
        textTransform: 'uppercase',
    },
})