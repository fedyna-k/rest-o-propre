import React, { useEffect, useReducer, useState } from "react";
import { View, ImageBackground, Image} from "react-native";
import { TextInput } from 'react-native';
import { BackHandler } from 'react-native';
import Button from "../components/form/Button";
import Login from './Login';

const background_img = require("../../assets/images/background_log.png");
const logo = require("../../assets/images/adaptive-icon.png");

export default function Connect({page, onLayout}) {
    [step, setStep] = useState([""]);
    [form, setForm] = useState(<></>);

    BackHandler.addEventListener("hardwareBackPress", () => {
        if (page != "connect") return true;

        if (step.length == 1) {
            BackHandler.exitApp();
            return false;
        }

        setStep(step.slice(0, -1));
        return true;
    });

    function goToNext(next) {
        return () => {
            setStep(step.concat([next]));
        };
    }
      

    useEffect(() => {
        setForm(step.reduce((obj, key) => obj[key], steps).form);
    }, [step]);

    const steps = {
        "": {
            "form": (
                <View style={{width: "100%", gap:20, marginBottom: 100, padding: 20}}>
                    <Button action={goToNext("register")} text="S'inscrire" theme="light"/>
                    <Button action={goToNext("login")} text="Se connecter"/>
                </View>),
            "register": {
                "form": (<View><Button text="Test"/></View>)
            },
            "login":  <Login /> 
        }
    }

    return (
        <View onLayout={onLayout} style={{ flex: 1 }}>
            <ImageBackground
                source={background_img}
                resizeMode="cover"
                style={{ flex: 1, alignItems: 'center', justifyContent: "space-between"}}>
                    <Image source={logo} style={{height: "40%", aspectRatio: 1}}/>
                    
                    {form}
            </ImageBackground>
        </View>
    );
}