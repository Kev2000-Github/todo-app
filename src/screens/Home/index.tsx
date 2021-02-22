import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from '../appNavigator';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { globalStyle } from '../../common/globalStyle';
import { MaterialIcons } from "@expo/vector-icons";
import { processDate, titles } from "../../common/utils";
import { FlatButton } from "../../components/button";
import { Image } from "react-native";
import { styleData } from "../../common/utils";
import { multipleTasksType } from "../../rootReducer";
const { globalBG } = globalStyle;

type Props = StackScreenProps<RootStackParamList, 'Home'>;

export const Home = ({ navigation }: Props) => {
    const tasks = useSelector((state: multipleTasksType) => state['tasks']);
    const [refresh, setRefresh] = useState(false);
    const dispatch = useDispatch();
    console.log(tasks);
    const handleRefresh = () => {
        setRefresh(true);
        dispatch({ type: 'RELOAD' });
        setRefresh(false);
    }
    const addHandler = (item: any) => {
        navigation.navigate("EditTask", { ...item, title: titles.create })
    }
    const editHandler = (item: any) => {
        navigation.navigate("EditTask", { ...item, title: titles.edit });
    }
    const deleteHandler = (e: any) => {
        dispatch({ type: "DELETE_TASK", payload: e })
    }

    return (
        <View style={globalBG}>
            <Image source={require('../../../assets/main.png')} style={styles.mainImg} />
            <FlatButton text="A D D  T A S K" onPress={() => addHandler({ task: "" })} />
            <Text style={{ ...styles.regularText, ...styles.title }}>TODO LIST</Text>
            <FlatList
                refreshing={refresh}
                onRefresh={handleRefresh}
                keyExtractor={(item) => item['id']}
                style={styles.list}
                data={tasks.reverse()}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.listItem}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ ...styles.regularText, ...styles.listText }}>{item['task']}</Text>
                            <Text style={{ ...styles.miniText, ...styles.listText }}>{processDate(new Date(item['date']))}</Text>
                        </View>
                        <TouchableOpacity style={styles.taskIcon} onPress={() => editHandler(item)}>
                            <MaterialIcons name="edit" size={25} color="#EF476F" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.taskIcon} onPress={() => deleteHandler(item)}>
                            <MaterialIcons name="delete" size={25} color="#EF476F" />
                        </TouchableOpacity>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainImg: {
        height: 150,
        width: Dimensions.get('screen').width,
        resizeMode: 'contain',
        marginTop: -40,
        marginBottom: -40,
    },
    regularText: {
        fontFamily: "nunito-regular",
        fontSize: 18,
    },
    title: {
        fontFamily: "nunito-bold",
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 10,
        color: styleData.roseColor

    },
    taskIcon: {
        padding: 5,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'gray',
        marginRight: 10,
    },
    miniText: {
        fontFamily: "nunito-regular",
        fontSize: 12,
        paddingTop: 5,
        color: 'gray'
    },
    list: {
        marginTop: 10,
        height: '100%',
    },
    listItem: {
        borderColor: "#ddd",
        borderTopWidth: 1,
        paddingBottom: 10,
        paddingTop: 10,
        width: '100%',
        alignSelf: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
    },
    listText: {
        alignSelf: 'flex-start',
        paddingLeft: 10,
    }
}) 