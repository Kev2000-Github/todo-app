import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from './Home';
import { Header } from '../components/header';
import { EditTask } from './EditTask';
import { styleData, titles } from "../common/utils";
const { Navigator, Screen } = createStackNavigator();

export type RootStackParamList = {
    Home: undefined,
    EditTask: {
        task: string,
        title: string,
        id: string,
    },
}

export const AppNavigator = () => (
    <NavigationContainer>
        <Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: styleData.headerColor,
                    height: 60,
                },
                headerTitleAlign: 'center',
            }}
        >
            <Screen
                name="home"
                component={Home}
                options={{ headerTitle: () => <Header title="H o m e" /> }}
            />
            <Screen
                name="EditTask"
                component={EditTask}
                options={({ route }) => {
                    //@ts-ignore
                    const title = route.params['title'];
                    return { headerTitle: () => <Header title={title} /> }
                }}
            />
        </Navigator>
    </NavigationContainer>
);
