import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { styleData } from "../common/utils";
interface HeaderProps {
    title: string
}

export const Header = ({ title }: HeaderProps) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: '100%',
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: styleData.roseColor,
        textTransform: 'uppercase',
        fontSize: 20,
        fontFamily: 'nunito-bold',
        zIndex: 2,
    }
})