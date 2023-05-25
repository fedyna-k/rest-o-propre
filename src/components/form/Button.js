import React from "react";
import { Pressable } from "react-native";
import Title from "../text/Title";

export default function Button({text, action, theme="dark", width="100%"}) {
    return (
        <Pressable style={{
            borderRadius: 10,
            backgroundColor: theme == "dark" ? "black" : "white",
            width: width,
            padding: 5,
            justifyContent: "center",
            alignItems: "center"
        }} onPress={action}>
            <Title style={{color: theme == "dark" ? "white" : "black"}}>{text}</Title>
        </Pressable>
    );
}