import React, { useRef } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import ImperativeChild from "./ImperativeChild";

const Imperative = () => {
    const compRef = useRef(null)
    return (
        <SafeAreaView style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', textDecorationLine: 'underline' }}>useImperativeHandle</Text>
            <TouchableOpacity onPress={() => {
                compRef.current.show() //This is a child component's function and we are calling it in Parent Component by creating a
                // reference of child component's function with the help of useImperativeHandle
            }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', marginTop: 20 }}>Imperative Parent</Text>
            </TouchableOpacity>
            <ImperativeChild ref={compRef} />
        </SafeAreaView>
    )
}

export default Imperative;