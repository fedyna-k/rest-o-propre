import React from "react";
import { StyleSheet, View } from "react-native";

import Title from "../text/Title";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const form_style = StyleSheet.create({
    main: {
        width: "100%",
        paddingHorizontal: 10,
        paddingBottom: 50,
        paddingTop: 15,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: "white",
        minHeight: "60%",
        alignItems: "center",
    },
    header: {
        position: "relative",
        top: 0,
        flexDirection: "row",
        marginBottom: 10
    },
    back: {
        position: "absolute",
        left: "-35%"
    },
    content: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        flexDirection: "column",
        gap: 20
    }
});

export default function Form({children, title, stepHandler}) {
    return (
        <View style={form_style.main}>
            <View style={form_style.header}>
                <MaterialIcons
                    name="arrow-back"
                    size={28}
                    style={form_style.back}
                    onPress={() => {stepHandler.setStep(stepHandler.step.slice(0, -1))}}
                    />
                <Title>{title}</Title>
            </View>
            <View style={form_style.content}>
                {children}
            </View>
        </View>
    );
}