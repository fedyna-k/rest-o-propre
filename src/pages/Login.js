import React, { useEffect, useReducer, useState } from "react";
import { View, ImageBackground, Image, TextInputComponent} from "react-native";
import { TextInput } from 'react-native';

import { BackHandler } from 'react-native';
import Button from "../components/form/Button";
import EmailInput from "../components/text/EmailInput"; // Chemin vers EmailInput.js
import MdpInput from "../components/text/MdpInput"; // Chemin vers MdpInput.js

const background_img = require("../../assets/images/background_log.png");
const logo = require("../../assets/images/adaptive-icon.png");

export default function Login({ page, onLayout }) {
  const [step, setStep] = useState([""]);
  const [form, setForm] = useState(<></>);
  const steps = {
    "": {
      "login": (
        <View style={{ width: "100%", gap: 20, marginBottom: 100, padding: 20 }}>
          <EmailInput /> {/* Utilisation du composant de zone de texte pour l'e-mail */}
          <MdpInput /> {/* Utilisation du composant de zone de texte pour le mot de passe */}
          <Button action={goToNext("Login")} text="Se connecter" />
          <Button action={goToNext("MdpOublier")} text="Mot de passe oublié" theme="light" />
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