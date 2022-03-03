import React, { useContext } from "react";
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { AppContext } from "./ContextHook";

const User = () => {

    const { userName } = useContext(AppContext)

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: 20 }}>{`User: ${userName}`}</Text>
        </View>
    )
}

export default User;