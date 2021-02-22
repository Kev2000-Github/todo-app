import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RootStackParamList } from '../appNavigator';
import { StackScreenProps } from "@react-navigation/stack";
import { globalStyle } from '../../common/globalStyle';
import { FlatButton } from '../../components/button';
import { Input } from "../../components/input";
import { titles } from '../../common/utils';
import { useForm, Controller } from "react-hook-form";
import { DismissKeyboard } from "../../components/dismissKeyboard";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
type Props = StackScreenProps<RootStackParamList, 'EditTask'>;

const taskRules = {
    required: { value: true, message: "Task can't be blank" },
    minLength: { value: 3, message: "Task must have minimum 3 characters" },
    maxLength: { value: 15, message: "Task must be maximun 15 characters" }
}

export const EditTask = ({ navigation, route }: Props) => {
    const { control, errors, handleSubmit } = useForm();
    const { task, id } = route.params;
    const dispatch = useDispatch();
    const onSubmit = (data: Object) => {
        const type = route.params.title == titles.create ? "ADD_TASK" : "EDIT_TASK";
        const date = new Date().getTime();
        const returnData = { id, date, ...data };
        if (type == "ADD_TASK") returnData['id'] = uuidv4();
        dispatch({ type, payload: returnData });
        navigation.goBack();
    }
    return (
        <DismissKeyboard>
            <View style={{ ...globalStyle.globalBG, height: '100%' }}>
                <View style={styles.container}>
                    <Text style={styles.regularText}>TASK: </Text>
                    <View>
                        <Controller
                            name="task"
                            defaultValue={task}
                            rules={taskRules}
                            control={control}
                            render={({ onChange, value }) => (
                                <Input
                                    onChangeText={text => onChange(text)}
                                    placeholder='Task (eg: Clean my Room)'
                                    value={value}
                                    errorText={errors?.task?.message}
                                />
                            )}
                        />
                    </View>
                    <FlatButton text="S U B M I T" onPress={handleSubmit(onSubmit)} />
                </View>
            </View>
        </DismissKeyboard>
    )
}

const styles = StyleSheet.create({
    regularText: {
        fontFamily: "nunito-regular",
        fontSize: 16,
        marginLeft: 20,
        marginTop: 20,
    },
    container: {
        borderWidth: 1,
        borderColor: 'gray',
        width: '90%',
        marginTop: 20,
        borderRadius: 8,
        alignSelf: 'center',
        paddingBottom: 20,
    }
}) 