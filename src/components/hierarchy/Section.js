import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

const section_style = StyleSheet.create({
    main: {
        width: "100%",
        backgroundColor: "#f3f3f3",
        marginTop: 10,
        paddingHorizontal: 20,
        paddingTop: 20
    }
});

export default function Section({children}) {
    return (
        <SafeAreaView style={section_style.main}>
            {children}
        </SafeAreaView>
    );
}