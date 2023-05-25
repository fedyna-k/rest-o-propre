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


const goToProfessionalRegister3 = () => {
    navigation.navigate('ProfessionalRegister3'); // Remplacez 'Dashboard' par le nom de votre prochaine page
  };

export default function UsagerRegisterP2({ page, onLayout }) {
    const [step, setStep] = useState([""]);
    const [form, setForm] = useState(<></>);
    const navigation = useNavigation();
    const steps = {
        "": {
            "usagerRegisterP2": (
                <View style={{ width: "100%", gap: 20, marginBottom: 100, padding: 20 }}>
                    <TextInput /> {/* Utilisation du composant de zone de texte pour le Nom de L'etablissement */}
                    <TextInput /> {/* Utilisation du composant de zone de texte pour le Numero de Siret */}
                    <TextInput /> {/* Utilisation du composant de zone de texte pour l'Adresse' */}
                    <TextInput /> {/* Utilisation du composant de zone de texte pour le code Postal' */}
                    <TextInput /> {/* Utilisation du composant de zone de texte pour le Pays' */}
                    <Button action={goToProfessionalRegister3} text="Suivant" />
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
