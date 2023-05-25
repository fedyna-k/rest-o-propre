import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import NormalText from "../text/NormalText";


const input_style = StyleSheet.create({
    main: {
        width: "100%",
    },
    input: {
        width: "100%",
        backgroundColor: "#f3f3f3",
        borderBottomColor: "#575757",
        borderBottomWidth: 1,
        fontFamily: "Regular",
        fontSize: 18,
        paddingHorizontal: 10,
        paddingVertical: 5
    }
});


export default function Input({text, name, getter, props}) {
    return (
        <View style={input_style.main}>
            <NormalText style={{fontSize: 11}}>{text}</NormalText>
            <TextInput
                {...props}
                style={input_style.input}
                onChangeText={newText => {
                    let returned = {
                        key: name,
                        value: newText
                    };
                    getter(returned);
                }}
                />
        </View>
    );
}