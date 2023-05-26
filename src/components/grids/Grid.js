import React from "react";
import { StyleSheet, View } from "react-native";
import Bloc from "./Bloc";

const category_style = StyleSheet.create({
    main: {
        paddingVertical: 30,
        width: "100%",
        gap: 10
    },
    sub: {
        flexDirection: "row",
        gap: 10
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

export default function Grid({items, image=false, pageSetter}) {
    return (
        <View style={category_style.main}>
            <View style={category_style.sub}>
                <Bloc style={{height: 80}} backgroundImage={image ? images[0] : null} text={items[0]}></Bloc>
                <Bloc style={{height: 80}} backgroundImage={image ? images[1] : null} text={items[1]}></Bloc>
            </View>
            <View style={category_style.sub}>
                <Bloc style={{height: 80}} backgroundImage={image ? images[2] : null} text={items[2]} isBig={false}></Bloc>
                <Bloc style={{height: 80}} backgroundImage={image ? images[3] : null} text={items[3]} isBig={false}></Bloc>
                <Bloc style={{height: 80}} backgroundImage={image ? images[4] : null} text={items[4]} isBig={false}></Bloc>
                <Bloc style={{height: 80}} backgroundImage={image ? images[5] : null} text={items[5]} isBig={false}></Bloc>
            </View>
        </View>
    );
}