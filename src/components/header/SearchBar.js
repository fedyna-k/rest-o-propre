import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const searchbar_style = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        width: "100%",
        marginTop: 25,
        marginBottom: 5,
        padding: 2,
        borderRadius: 10
    },
    inside: {
        backgroundColor: "#e6e6e6",
    },
    outside: {
        backgroundColor: "#f3f3f3",
    },
    search: {
        marginHorizontal: 15
    },
    bar: {
        flex: 1
    }
});

export default function SearchBar({inside}) {
    return (
        <View style={
            inside ? 
            StyleSheet.compose(searchbar_style.wrapper, searchbar_style.inside) :
            StyleSheet.compose(searchbar_style.wrapper, searchbar_style.outside)
        }>
            <MaterialIcons name="search" size={28} style={searchbar_style.search} />
            <TextInput
                style={searchbar_style.bar}
                placeholder="Restaurant, nourriture..."
            />
        </View>
    );
}