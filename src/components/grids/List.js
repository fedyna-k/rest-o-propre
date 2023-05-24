import React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import Bloc from "../Bloc";

const category_style = StyleSheet.create({
    main: {
        paddingVertical: 30,
        width: "100%",
    },
    bloc: {
        width: "100%",
        height: 150,
        marginBottom: 30
    }
});


export default function List({items, pageSetter}) {
    function createChild({item}) {
        return (<Bloc style={category_style.bloc}></Bloc>);
    }

    return (
        <View style={category_style.main}>
            <FlatList
                overScrollMode="never"
                showsVerticalScrollIndicator={false}
                renderItem={createChild}
                data={items}>
            </FlatList>
        </View>
    );
}