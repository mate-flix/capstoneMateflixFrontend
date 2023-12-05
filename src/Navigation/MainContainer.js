import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from "./HomeScreen";
import MySchool from "./MySchool";
import RoomMate from "./RoomMate";
import Chat from "./Chat";
import Post from "./Post";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'MySchool') {
                            iconName = focused ? 'school' : 'school-outline';
                        } else if (route.name === 'Post') {
                            iconName = focused ? 'add' : 'add-outline';;
                        } else if (route.name === 'Chat') {
                            iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
                        }  else if (route.name === 'RoomMate') {
                            iconName = focused ? 'bed' : 'bed-outline';
                        }




                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'black',
                    inactiveTintColor: 'black',
                }}

            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="MySchool" component={MySchool} />
                <Tab.Screen name="RoomMate" component={RoomMate} />
                <Tab.Screen name="Chat" component={Chat} />
                <Tab.Screen name="Post" component={ Post} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
