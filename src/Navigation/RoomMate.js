import React from 'react';
import { View, Text } from 'react-native';

export default function RoomMate({navigation}){
    return (
        <View style={{flex : 1,alignItems:"center",justifyContent:"center"}}>
            <Text
                onPress={()=> alert("welcome find RoomMate ")}
                style={{fontSize: 26,fontWeight:"bold"}}> RoomMate</Text>
        </View>
    );
};


