import React, { useEffect, useLayoutEffect, useState } from "react";
import { Text, View, SafeAreaView } from 'react-native';

const LayoutEffect = () => {

    const [result, setResult] = useState(0)

    useEffect(() => {
        console.log('Inside UseEffect')
    }, [])

    //It is fundamentally called at earlier stage of component rendering while
    // useEffect called after everything is rendered into page and is shown to the user.
    useLayoutEffect(() => {
        console.log('Inside UseLayOut Effect')
    }, [])

    //Timeout is used here,just to display the result resolved using useLayoutEffect
    useEffect(() => {
        setTimeout(() => {
            setResult(add(4, 4))
        }, 1000)
        // setResult(add(4, 4))


    }, [])

    useLayoutEffect(() => {
        setResult(add(5, 5))
    }, [])

    // A function of adding two numbers has been passed to useEffect and useLayoutEffect,both will resolve the 
    // fuction but the output which we will see on the screen will be of useEffect as useLayout Effect will resolve
    // the function before the data get visible to user and as we are also performing the same function inside 
    // useEffect, so it will override it and we will show the result of function resolved by useEffect. 
    const add = (a, b) => {
        return a + b;
    }

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', textDecorationLine: 'underline' }}>useLayout Effect</Text>
            <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: 20 }} >{'Result after adding: ' + result}</Text>
        </SafeAreaView>
    )
}

export default LayoutEffect;