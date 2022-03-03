import React, { forwardRef, useImperativeHandle, useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

const ImperativeChild = forwardRef((props, ref) => {

    const [showText, setShowText] = useState(false)

    //we can use the function defined inside this in our parent component
    useImperativeHandle(ref, () => ({
        show: () => {
            setShowText(!showText)
        }
    }))
    return (
        <SafeAreaView style={{ justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => {
                setShowText(!showText)
            }}>
                <Text style={{ fontSize: 30, fontWeight: '600', marginTop: 20 }}>Imperative Child</Text>
            </TouchableOpacity>
            {showText ? <Text style={{ fontSize: 30, fontWeight: '500', marginTop: 20 }}>Hello there!!!!</Text> : null}

        </SafeAreaView>
    )
})

export default ImperativeChild;