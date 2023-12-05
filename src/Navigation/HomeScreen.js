import React from 'react';
import { View, Text } from 'react-native';
import Header from '../components/Header/Header';

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <Text
                    onPress={() => alert("Welcome to home page ")}
                    style={{ fontSize: 26, fontWeight: "bold" }}> Home screen</Text>
            </View>
        </View>
    );
}
