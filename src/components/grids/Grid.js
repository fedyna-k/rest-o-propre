import React from "react";
import { StyleSheet, View } from "react-native";
import Bloc from "./Bloc";

const category_style = StyleSheet.create({
    main: {
        paddingVertical: 30,
        width: "100%",
        gap: 10
    },
    sub: {
        flexDirection: "row",
        gap: 10
    }
});


export default function Grid({items, pageSetter}) {
    return (
        <View style={category_style.main}>
            <View style={category_style.sub}>
                <Bloc style={{height: 80}}></Bloc>
                <Bloc style={{height: 80}}></Bloc>
            </View>
            <View style={category_style.sub}>
                <Bloc style={{height: 80}}></Bloc>
                <Bloc style={{height: 80}}></Bloc>
                <Bloc style={{height: 80}}></Bloc>
                <Bloc style={{height: 80}}></Bloc>
            </View>
        </View>
    );
}