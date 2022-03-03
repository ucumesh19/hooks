import React, { useRef, useState, useEffect } from "react";
import { SafeAreaView, Text, TextInput, View, TouchableOpacity } from 'react-native';

const RefHook = () => {

    const inputRef = useRef(null)
    const countRef = useRef(0)
    const [input, setInput] = useState('');

    // A function that is taking reference of TextInput and using its function like focus() and clear() with the help of useRef 
    const onPress = () => {
        // inputRef.current.focus()
        inputRef.current.clear()
        // console.log(inputRef.current.value ?? 'Not Working')
    }

    //A function that uses useRef and showing the number of times a button is pressed
    const count = () => {
        countRef.current++
        alert(`I am pressed ${countRef.current} times`)
    }

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{input}</Text>
            <TextInput
                ref={inputRef}
                style={{ width: 300, height: 50, borderWidth: 1, backgroundColor: 'grey', padding: 15, color: 'white', fontSize: 20 }}
                //  value="Ram"
                placeholder='Your Name'
                placeholderTextColor={'white'}
                onChangeText={(text) => setInput(text)}
                value={input}
            />
            <TouchableOpacity onPress={() => {
                onPress()
            }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Focus(useRef)</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                count()
            }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: 20 }}>Button Pressed</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default RefHook;