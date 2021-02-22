import React from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';

interface InputProps {
    errorText: string,
    onChangeText: ((text: string) => void) | undefined,
    placeholder: string,
    value: string,
}

export const Input = (props: InputProps) => {
    return (
        <View style={styles.wrapper}>
            <TextInput
                style={styles.input}
                {...props}
            />
            {props.errorText && (
                <Text style={styles.errorText}>{props.errorText}</Text>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    errorText: {
        color: 'red',
        fontSize: 12,
    },
    wrapper: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
    }
})