import React from 'react';
import { View, Text } from 'react-native';

export default function MySchool({navigation}){
    return (
        <View style={{flex : 1,alignItems:"center",justifyContent:"center"}}>
            <Text
                onPress={()=> alert("welcome to home page ")}
                style={{fontSize: 26,fontWeight:"bold"}}> welcome to school  page </Text>
        </View>
    );
};


