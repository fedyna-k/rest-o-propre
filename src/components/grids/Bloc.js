import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import Title from "../text/Title";
import NormalText from "../text/NormalText";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const bloc_style = StyleSheet.create({
    main: {
        backgroundColor: "#e6e6e6",
        borderRadius: 10,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default function Bloc({style, text, backgroundImage=null, isBig=true, note=-1, notes=0}) {
    if (backgroundImage) {
        return (
            <ImageBackground blurRadius={3} source={backgroundImage} borderRadius={10} style={StyleSheet.compose(bloc_style.main, style)}>
                {isBig ? <Title style={{fontFamily: "Bold", color: "white"}}>{text}</Title> : <NormalText style={{fontFamily: "Bold", color: "white"}}>{text}</NormalText>}
                {note != -1 ? <View style={{flexDirection: "row"}}>
                    {Array(note).fill(<MaterialIcons name="star" size={isBig ? 28 : 18} color="gold" />)}
                    {Array(5 - note).fill(<MaterialIcons name="star-outline" size={isBig ? 28 : 18} color="white" />)}
                </View> : <></>}
            </ImageBackground>
        );
    }

    if (notes) {
        return (
            <View style={StyleSheet.compose(bloc_style.main, style)}>
            {isBig ? <Title style={{fontFamily: "Bold"}}>{text}</Title> : <NormalText style={{fontFamily: "Bold"}}>{text}</NormalText>}
            <View style={{flexDirection: "row"}}>
                {isBig ? <Title>Soin : </Title> : <NormalText>Soin : </NormalText>}
                {Array(notes.note_soin).fill(<MaterialIcons name="star" size={isBig ? 28 : 18} color="gold" />)}
                {Array(5 - notes.note_soin).fill(<MaterialIcons name="star-outline" size={isBig ? 28 : 18} color="black" />)}
            </View> 
            <View style={{flexDirection: "row"}}>
                {isBig ? <Title>Soin : </Title> : <NormalText>Vaisselle : </NormalText>}
                {Array(notes.note_vaisselle).fill(<MaterialIcons name="star" size={isBig ? 28 : 18} color="gold" />)}
                {Array(5 - notes.note_vaisselle).fill(<MaterialIcons name="star-outline" size={isBig ? 28 : 18} color="black" />)}
            </View> 
            <View style={{flexDirection: "row"}}>
                {isBig ? <Title>Soin : </Title> : <NormalText>Propreté : </NormalText>}
                {Array(notes.note_proprete).fill(<MaterialIcons name="star" size={isBig ? 28 : 18} color="gold" />)}
                {Array(5 - notes.note_proprete).fill(<MaterialIcons name="star-outline" size={isBig ? 28 : 18} color="black" />)}
            </View>
            {isBig ? <Title>{notes.comment}</Title> : <NormalText>{notes.comment}</NormalText>}
            </View>
        );
    }
    
    return (
        <View style={StyleSheet.compose(bloc_style.main, style)}>
            {isBig ? <Title>{text}</Title> : <NormalText>{text}</NormalText>}
            {note != -1 ? <View style={{flexDirection: "row"}}>
                    {Array(note).fill(<MaterialIcons name="star" size={isBig ? 28 : 18} color="gold" />)}
                    {Array(5 - note).fill(<MaterialIcons name="star-outline" size={isBig ? 28 : 18} color="black" />)}
                </View> : <></>}
        </View>
    );
}