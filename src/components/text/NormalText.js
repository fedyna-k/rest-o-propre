import React from "react";
import { StyleSheet, Text } from "react-native";

const text_style = StyleSheet.create({
    main: {
        fontFamily: "Regular"
    }
});

export default function NormalText({style, children}) {
    return (
        <Text style={StyleSheet.compose(text_style.main, style)}>
            {children}
        </Text>
    );
}