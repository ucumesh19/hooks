import React, { useReducer } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

const initialState = {
    count: 0,
    showText: 'true'
};

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1, showText: !state.showText };
        case "DECREMENT":
            return { count: state.count - 1, showText: !state.showText };
        default:
            return state;
    }
}
const ReducerHook = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Counter</Text>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => {
                    dispatch({
                        type: "DECREMENT"
                    })
                }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', marginRight: 20 }}>-</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 30, fontWeight: 'bold', marginRight: 20 }}>{state.count}</Text>
                <TouchableOpacity onPress={() => {
                    dispatch({
                        type: "INCREMENT"
                    })
                }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>+</Text>
                </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 30, fontWeight: 'bold', marginRight: 20 }}>{state.showText ? 'Even Number' : 'Odd Number'}</Text>
        </SafeAreaView >
    )
}

export default ReducerHook;