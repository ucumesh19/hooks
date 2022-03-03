import React, { useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native'

const Child = ({ show }) => {

    // Despite we have passed show() inside [] in useEffect ,everytime we pressed the button in parent component ,the 
    // useEffect will get rerender as whenever there is a state change, the functions are recreated , so for this we will
    // use Callback in parent component  
    useEffect(() => {
        console.log("Function is called inside Child Component")
    }, [show])

    return (
        <View>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>{show()}</Text>
        </View>
    )
}

export default Child;