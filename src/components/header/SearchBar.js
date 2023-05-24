import React from 'react';
import { StyleSheet, TextInput, View, Pressable } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const searchbar_style = StyleSheet.create({
    wrapper: {
        backgroundColor: "#e6e6e6",
        flexDirection: "row",
        width: "100%",
        marginTop: 25,
        marginBottom: 5,
        padding: 2,
        borderRadius: 10
    },
    search: {
        marginHorizontal: 15
    },
    bar: {
        flex: 1
    }
});

export default function SearchBar({}) {
    return (
        <View style={searchbar_style.wrapper}>
            <MaterialIcons name="search" size={28} style={searchbar_style.search} />
            <TextInput
                style={searchbar_style.bar}
                placeholder="Restaurant, nourriture..."
            />
        </View>
    );
}