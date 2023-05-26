import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const mapswitch_style = StyleSheet.create({
    wrapper: {
        backgroundColor: "white",
        borderRadius: 10,
        flexDirection: "row",
    },
    selected: {
        backgroundColor: "black",
        borderRadius: 10,
        color: "white",
        paddingHorizontal: 5
    },
    unselected: {
        color: "black"
    }
});

export default function MapSwitch({toggled, setToggled}) {

    function handlePress() {
        setToggled(!toggled);
    }

    return (
        <Pressable style={mapswitch_style.wrapper} onPress={handlePress}>
            <MaterialIcons name="menu" size={24} style={toggled ? mapswitch_style.unselected : mapswitch_style.selected} />
            <MaterialIcons name="public" size={24} style={toggled ? mapswitch_style.selected : mapswitch_style.unselected} />
        </Pressable>
    );
}