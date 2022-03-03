import React, { useState, createContext } from "react";
import { SafeAreaView, Text, TextInput, View, TouchableOpacity } from 'react-native';
import Login from "./Login";
import User from "./User";

export const AppContext = createContext(null)

const ContextHook = () => {

    const [userName, setUserName] = useState('');

    return (
        <SafeAreaView>
            <AppContext.Provider value={{ userName, setUserName }}>
                <Login />
                <User />
            </AppContext.Provider>
        </SafeAreaView>
    )
}

export default ContextHook