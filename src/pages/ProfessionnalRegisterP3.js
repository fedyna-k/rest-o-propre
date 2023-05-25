import React, { useEffect, useReducer, useState } from "react";
import { View, ImageBackground, Image, TextInputComponent } from "react-native";
import { TextInput } from 'react-native';
import { BackHandler } from 'react-native';
import Button from "../components/form/Button";
import TextInput from "../components/text/TextInput"; 
import AgeInput from "../components/text/AgeInput"; 
import { useNavigation } from '@react-navigation/native';

const background_img = require("../../assets/images/background_log.png");
const logo = require("../../assets/images/adaptive-icon.png");

const goToProfessionalRegisterP4 = () => {
    useNavigation.navigate('professionalRegisterP4'); 
};


export default function ProfessionalRegisterP3({ page, onLayout }) {
    const [step, setStep] = useState([""]);
    const [form, setForm] = useState(<></>);
    const steps = {
        "": {
            "professionalRegisterP3": (
                <View style={{ width: "100%", gap: 20, marginBottom: 100, padding: 20 }}>
                    <TextInput /> {/* Utilisation du composant de zone de texte pour le Prenom */}
                    <TextInput /> {/* Utilisation du composant de zone de texte pour le Nom */}
                    <TextInput /> {/* Utilisation du composant de zone de texte pour le Pseudo */}
                    <AgeInput /> {/* Utilisation du composant de zone de texte pour l'Age */}
                    <Button action={goToProfessionalRegisterP4} text="Suivant" />

                </View>
            ),
        }
    };

    return (
        <View onLayout={onLayout} style={{ flex: 1 }}>
            <ImageBackground
                source={background_img}
                resizeMode="cover"
                style={{ flex: 1, alignItems: 'center', justifyContent: "space-between" }}
            >
                <Image source={logo} style={{ height: "40%", aspectRatio: 1 }} />

                {form}
            </ImageBackground>
        </View>
    );
}
