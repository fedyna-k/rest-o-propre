import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Bloc from "./Bloc";

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

const images = [
    require("../../../assets/images/back-1.jpg"),
    require("../../../assets/images/back-2.jpg"),
    require("../../../assets/images/back-3.jpg"),
    require("../../../assets/images/back-4.jpg"),
    require("../../../assets/images/back-5.jpg"),
    require("../../../assets/images/back-6.jpg"),
]

export default function List({items, pageSetter}) {
    function createChild({item}) {
        return (<Bloc key={Math.random()} style={category_style.bloc} backgroundImage={images[item.type - 1]} note={item.note} text={item.name}></Bloc>);
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