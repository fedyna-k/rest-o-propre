import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView  } from 'react-native-safe-area-context';

import SearchBar from './SearchBar';
import Title from '../text/Title';

const header_style = StyleSheet.create({
    container: {
        position: "relative",
        top: 0,
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        zIndex: 99,
        backgroundColor: "#f3f3f3"
    },
    wrapper: {
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#e6e6e6",
        padding: 15
    },
    link: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    }
})

export default function HeaderPro({text, includeSearch, placeholder}) {
    return (
        <SafeAreaView style={header_style.container}>
            <View style={header_style.wrapper}>
                <Title>{text}</Title>
            </View>
                {includeSearch ?
                <View style={{paddingHorizontal: 15, paddingBottom: 15, width: "100%"}}>
                    <SearchBar placeholder={placeholder} inside={true}></SearchBar>
                </View> : null}
            
        </SafeAreaView>
    );
}