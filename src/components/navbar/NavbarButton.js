import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const navbar_button_style = StyleSheet.create({
    link: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10
    },
    link_text: {
        fontSize: 11,
        fontFamily: "Regular"
    },
    selected: {
        color: "#8E5624"
    },
    unselected: {
        color: "#2A2A2A"
    }
})

export default function NavbarButton({name, icon, size, text, selected, stateSetter}) {
    const selected_button = StyleSheet.compose(navbar_button_style.link_text, navbar_button_style.selected);
    const unselected_button = StyleSheet.compose(navbar_button_style.link_text, navbar_button_style.unselected);

    function changeSelected() {
        stateSetter(name);
    }
    
    return (
        <Pressable style={navbar_button_style.link} onPress={changeSelected}>
            <MaterialIcons
                style={selected ? navbar_button_style.selected : navbar_button_style.unselected}
                name={name}
                size={size ?? 28}
            />
            <Text style={selected ? selected_button : unselected_button}>{text}</Text>
        </Pressable>
    );
}