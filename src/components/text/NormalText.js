import React from "react";
import { StyleSheet, Text } from "react-native";

const text_style = StyleSheet.create({
    main: {
        fontFamily: "Regular"
    }
});

export default function NormalText({children}) {
    return (
        <Text style={text_style.main}>
            {children}
        </Text>
    );
}