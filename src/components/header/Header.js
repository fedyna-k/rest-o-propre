import React, {useState} from 'react';
import { StyleSheet, Text, Pressable, View } from 'react-native';
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

export default function Header({pageSetter, current, username, includeMap=true, searchbarInside=true}) {
    [onMap, setOnMap] = useState(false);

    return (
        <SafeAreaView style={header_style.container}>
            <View style={header_style.wrapper}>
                <View style={header_style.top_wrapper}>
                    <Pressable style={header_style.link} onPress={() => pageSetter("menu")}>
                        <MaterialIcons style={{color: current == "menu" ? "#2A2A2A" : "#2A2A2A"}} name="person" size={28} />
                        <Text style={{fontFamily: "Regular"}}>{username ?? "User42069"}</Text>
                    </Pressable>

                    {includeMap ? <MapSwitch toggled={onMap} setToggled={setOnMap}></MapSwitch> : null}
                </View>

                {searchbarInside ? <SearchBar></SearchBar> : null}
            </View>
            <View style={{paddingHorizontal: 15, width: "100%"}}>
                {!searchbarInside ? <SearchBar></SearchBar> : null}
            </View>
        </SafeAreaView>
    );
}