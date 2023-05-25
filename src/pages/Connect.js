import React, { useEffect, useState } from "react";
import { View, ImageBackground, Image } from "react-native";
import { BackHandler } from "react-native";
import Button from "../components/form/Button";
import Login from './Login';
import { useNavigation } from '@react-navigation/native';

const background_img = require("../../assets/images/background_log.png");
const logo = require("../../assets/images/adaptive-icon.png");

  
const Connect = ({ page, onLayout }) => {
  const [step, setStep] = useState([""]);
  const [form, setForm] = useState(<></>);
  const navigation = useNavigation();
  const goToLoginPage = () => {
    navigation.navigate('Login'); // Remplacez 'Dashboard' par le nom de votre prochaine page
  };
  const goToRegisterPage = () => {
    navigation.navigate('Register'); // Remplacez 'Dashboard' par le nom de votre prochaine page
  };
  const goToNext = (next) => () => {
    setStep((prevStep) => [...prevStep, next]);
  };
  BackHandler.addEventListener("hardwareBackPress", () => {
    if (page !== "connect") return true;

    if (step.length === 1) {
      BackHandler.exitApp();
      return false;
    }

    setStep((prevStep) => prevStep.slice(0, prevStep.length - 1));
    return true;
  });



  useEffect(() => {
    const currentStep = steps[step.join(".")];
    if (currentStep && currentStep.form) {
      setForm(currentStep.form);
    } else {
      setForm(<></>);
    }
  }, [step]);

  

  const steps = {
    "": {
      form: (
        <View style={{ width: "100%", gap: 20, marginBottom: 100, padding: 20 }}>
          <Button action={goToRegisterPage} text="S'inscrire" theme="light" />
          <Button action={goToLoginPage} text="Se connecter" />
        </View>
      ),
      register: {
        form: <View><Button text="Test" /></View>,
      },
      login: <Login goToLoginPage={goToLoginPage} />,
    },
  };

  return (
    <View onLayout={onLayout} style={{ flex: 1 }}>
      <ImageBackground
        source={background_img}
        resizeMode="cover"
        style={{ flex: 1, alignItems: "center", justifyContent: "space-between" }}
      >
        <Image source={logo} style={{ height: "40%", aspectRatio: 1 }} />

        {step.length > 0 && form}
      </ImageBackground>
    </View>
  );
};

export default Connect;
