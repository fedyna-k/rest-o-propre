import React from "react";
import { StyleSheet, Text } from "react-native";

const title_style = StyleSheet.create({
    main: {
        fontFamily: "Regular",
        fontSize: 20,
        marginVertical: 5
    }
});

export default function Title({children}) {
    return (
        <Text style={title_style.main}>
            {children}
        </Text>
    );
}