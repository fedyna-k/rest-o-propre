import React, { useEffect, useReducer, useState } from "react";
import { View, ImageBackground, Image, TextInputComponent} from "react-native";
import { TextInput } from 'react-native';
import { BackHandler } from 'react-native';
import Button from "../components/form/Button";
import EmailInput from "../components/text/EmailInput"; // Chemin vers EmailInput.js
import MdpInput from "../components/text/MdpInput"; // Chemin vers MdpInput.js
import { useNavigation } from '@react-navigation/native';

const background_img = require("../../assets/images/background_log.png");
const logo = require("../../assets/images/adaptive-icon.png");


const goToProfessionnalRegisterPage = () => {
    navigation.navigate('ProfessionnalRegister'); // Remplacez 'Dashboard' par le nom de votre prochaine page
};
const goToUsagerRegisterPage = () => {
    navigation.navigate('UsagerRegister'); // Remplacez 'Dashboard' par le nom de votre prochaine page
};
export default function Register({ page, onLayout }) {
  const [step, setStep] = useState([""]);
  const [form, setForm] = useState(<></>);
  const navigation = useNavigation();


  const steps = {
    "": {
      form: (
        <View style={{ width: "100%", gap: 20, marginBottom: 100, padding: 20 }}>
          <Button action={goToProfessionnalRegister} text="Compte Professionnel" theme="light" />
          <Button action={goToUsagerRegister} text="Compte Usager" />
        </View>
      ),
    },

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


