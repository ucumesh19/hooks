import React, { useState, useCallback } from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import Child from "./Child";

const CallBackTut = () => {

    const [data, setData] = useState('Yo Boys!!Welcome to React Native')
    const [showText, setShowText] = useState(false);

    //In Callback we memoize a function while in useMemo we memoize a value    
    const show = useCallback(() => {
        return data;
    }, [data])


    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            <Child
                show={show} />
            {/* <Text>{data}</Text> */}

            {/* Even we are making changes in state of parent component ,the console in useEffect
            is rendering along with when we are doing any changes in different state of parent component
            so, to overcome this we will use Call back  */}
            <TouchableOpacity
                onPress={() => {
                    setShowText(!showText)
                }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>Check Console</Text>
            </TouchableOpacity>


            <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20 }}>{showText ? 'CallBack Dummy ' : null}</Text>
        </SafeAreaView>
    )
}

export default CallBackTut;