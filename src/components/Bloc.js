import React from "react";
import { StyleSheet, View } from "react-native";

const bloc_style = StyleSheet.create({
    main: {
        backgroundColor: "#e6e6e6",
        borderRadius: 10,
        flex: 1
    }
});

export default function Bloc({style}) {
    return (
        <View style={StyleSheet.compose(bloc_style.main, style)}></View>
    );
}