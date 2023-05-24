import React, {useCallback, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView  } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import MapSwitch from './MapSwitch';
import SearchBar from './SearchBar';

const header_style = StyleSheet.create({
    container: {
        position: "relative",
        top: 0,
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        zIndex: 99
    },
    wrapper: {
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#f3f3F3",
        padding: 15,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    top_wrapper: {
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
    },
    link: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    }
})

export default function Header({text, includeMap, searchbarInside=true}) {
    return (
        <SafeAreaView style={header_style.container}>
            <View style={header_style.wrapper}>
                <View style={header_style.top_wrapper}>
                    <View style={header_style.link}>
                        <MaterialIcons style={{color: "#2A2A2A"}} name="person" size={28} />
                        <Text style={{fontFamily: "Regular"}}>{text ?? "User42069"}</Text>
                    </View>

                    {includeMap ? <MapSwitch toggled={includeMap.onMap} setToggled={includeMap.setOnMap}></MapSwitch> : null}
                </View>

                {searchbarInside ? <SearchBar inside={true}></SearchBar> : null}
            </View>
            <View style={{paddingHorizontal: 15, width: "100%"}}>
                {!searchbarInside ? <SearchBar inside={false}></SearchBar> : null}
            </View>
        </SafeAreaView>
    );
}