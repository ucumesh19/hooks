import React, { useContext } from "react";
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { AppContext } from "./ContextHook";

const Login = () => {

    const { setUserName } = useContext(AppContext);

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
            <TextInput
                style={{ width: 300, height: 50, borderWidth: 1, backgroundColor: 'grey', padding: 15, color: 'white', fontSize: 20 }}
                placeholder='Your Name'
                placeholderTextColor={'white'}
                onChangeText={(text) => setUserName(text)}
            />
        </View>
    )
}

export default Login;