import React, { useEffect, useReducer, useState } from "react";
import { View, ImageBackground, Image, TextInputComponent } from "react-native";
import { TextInput } from 'react-native';
import { BackHandler } from 'react-native';
import Button from "../components/form/Button";
import EmailInput from "../components/text/EmailInput"; // Chemin vers EmailInput.js
import MdpInput from "../components/text/MdpInput"; // Chemin vers MdpInput.js
import { useNavigation } from '@react-navigation/native';

const background_img = require("../../assets/images/background_log.png");
const logo = require("../../assets/images/adaptive-icon.png");

const GoToAccueil = () => {
    navigation.navigate('Accueil'); // Remplacez 'Dashboard' par le nom de votre prochaine page
};


export default function Login({ page, onLayout }) {
    const [step, setStep] = useState([""]);
    const [form, setForm] = useState(<></>);
    const navigation = useNavigation();
    const steps = {
        "": {
            "login": (
                <View style={{ width: "100%", gap: 20, marginBottom: 100, padding: 20 }}>
                    <EmailInput /> {/* Utilisation du composant de zone de texte pour l'e-mail */}
                    <MdpInput /> {/* Utilisation du composant de zone de texte pour le mot de passe */}
                    <Button action={GoToAccueil} text="Se connecter" />
                    <Button action={goToNext("MdpOublier")} text="Mot de passe oublié" theme="light" />
                    <CheckBox
                        value={false} // Définissez la valeur initiale de la boîte à cocher
                        onValueChange={(value) => {
                            if(value==false) value==true;
                            else if(value==true) value ==false;
                            console.log('Rester connecté :', value);
                        }}
                        action = {onValueChange}
                    />

                </View>
            ),
            // "MdpOublier": (<View><Button text="Test"/></View>)
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
