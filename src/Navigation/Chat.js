import React from 'react';
import { View, Text } from 'react-native';

export default  function Chat({navigation}){
    return (
        <View style={{flex : 1,alignItems:"center",justifyContent:"center"}}>
            <Text
                onPress={()=> alert("send message ")}
                style={{fontSize: 26,fontWeight:"bold"}}> Send Messages</Text>
        </View>
    );
};


