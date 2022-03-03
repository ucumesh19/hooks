import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

const Memo = () => {

    const [data, setData] = useState('')
    const [showText, setShowText] = useState(false);

    //we are getting data from this api by using axios
    useEffect(() => {
        axios.
            get('https://jsonplaceholder.typicode.com/comments').
            then((response) => {
                setData(response.data)
            })
    }, [])

    //  A function to return the longest name among starting 25 names
    const findLongestName = (list) => {
        if (!list)
            return null
        let longestName = ''
        for (let i = 0; i < 25; i++) {
            let currentName = list[i].name;
            if (currentName.length > longestName.length) {
                longestName = currentName;
            }
        }
        console.log("Longest Name Searching ...")
        return longestName;
    }

    const getLongestName = useMemo(() => findLongestName(data), [data]) //function will be only called when the result get changed or there will be any change in variable data

    // const getLongestName = useMemo(() => findLongestName(data), [showText]) //function will be called everytime whenever there is any change in showText

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {/* <Text style={{ fontSize: 30, marginBottom: 20 }}>{findLongestName(data)}</Text> */}
            <Text style={{ fontSize: 25, marginBottom: 20 }}>{'Longest Name: ' + getLongestName}</Text>
            <TouchableOpacity onPress={() => {
                setShowText(!showText)
            }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>Check Console</Text>
            </TouchableOpacity>
            {/* EveryTime we change the value of showText ,the component get rerenders
            and the function findlongestName will call everytime irrespective of any change in 
            data state, so to overcome this , we will use useMemo */}

            <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20 }}>{showText ? 'React Native' : null}</Text>
        </SafeAreaView>
    )
}

export default Memo;

// on Save , last store value, useEffect, newly saved value