import React, { useEffect, useState } from "react";
import { ImageBackground, Image, View, Keyboard } from "react-native";
import { BackHandler } from 'react-native';

import Button from "../components/form/Button";
import Form from "../components/form/Form";
import Input from "../components/form/Input";
import Title from "../components/text/Title";
import NormalText from "../components/text/NormalText";

const background_img = require("../../assets/images/background_log.png");
const logo = require("../../assets/images/adaptive-icon.png");

export default function Connect({page, onLayout}) {
    const [step, setStep] = useState([""]);
    const [form, setForm] = useState(<></>);
    const [data, setData] = useState({});
    const [total, setTotal] = useState({});

    BackHandler.addEventListener("hardwareBackPress", () => {
        if (page != "connect") return true;

        if (step.length == 1) {
            BackHandler.exitApp();
            return false;
        }

        setStep(step.slice(0, -1));
        return true;
    });

    function goToNext(next, dependecies) {
        return () => {
            if (dependecies != undefined) {
                for (let dependecy of dependecies) {
                    if (total[dependecy] == "" || total[dependecy] == undefined) {
                        return;
                    }
                }
            }

            Keyboard.dismiss();
            setStep(step.concat([next]));
        };
    }

    useEffect(() => {
        setForm(step.reduce((obj, key) => obj[key], steps).form);
    }, [step]);

    useEffect(() => {
        if (data.key != undefined) {
            total[data.key] = data.value;
            setTotal(total);
        }
    }, [data]);

    const steps = {
        "": {
            "form": (
                <View style={{width: "100%", gap:20, marginBottom: 100, padding: 20}}>
                    <Button action={goToNext("register")} text="S'inscrire" theme="light"/>
                    <Button action={goToNext("login")} text="Se connecter"/>
                </View>),
            "register": {
                "form": (
                    <Form title="Inscription" stepHandler={{step, setStep}}>
                        <Button action={goToNext("user")} text="Compte bon mangeur"/>
                        <Button action={goToNext("pro")} text="Compte restaurateur"/>
                    </Form>),
                "user": {
                    "form": (
                        <Form title="Inscription" stepHandler={{step, setStep}}>
                            <Input name="email" getter={setData} text="E-mail"
                                props={{
                                    inputMode: "email",
                                    autoComplete: "email",
                                    defaultValue: total.email ?? ""
                                }}/>
                            <Input name="password" getter={setData} text="Mot de passe"
                                props={{
                                    inputMode: "text",
                                    autoComplete: "new-password",
                                    secureTextEntry: true,
                                    defaultValue: total.password ?? ""
                                }}/>
                            <Button action={goToNext("user", ["email", "password"])} width="50%" text="Suivant"/>
                        </Form>),
                "user": {
                    "form": (
                        <Form title="Inscription" stepHandler={{step, setStep}}>
                            <Input name="first" getter={setData} text="Prénom"
                                props={{
                                    inputMode: "text",
                                    autoComplete: "given-name",
                                    defaultValue: total.first ?? ""
                                }}/>
                            <Input name="last" getter={setData} text="Nom"
                                props={{
                                    inputMode: "text",
                                    autoComplete: "family-name",
                                    defaultValue: total.last ?? ""
                                }}/>
                            <Input name="pseudo" getter={setData} text="Pseudo"
                                props={{
                                    inputMode: "text",
                                    autoComplete: "username",
                                    defaultValue: total.pseudo ?? ""
                                }}/>
                            <Input name="age" getter={setData} text="Age"
                                props={{
                                    inputMode: "numeric",
                                    defaultValue: total.age ?? ""
                                }}/>
                            <Button action={goToNext("user", ["first", "last", "pseudo", "age"])} width="50%" text="Suivant"/>
                        </Form>),
                    "user": {
                        "form": (
                        <Form title="Inscription" stepHandler={{step, setStep}}>
                            <Title>Conditions générales d'utilisations</Title>
                            <NormalText style={{marginHorizontal: 10}}>En appuyant sur "S'inscrire", je donne mon consentement pour que l'entièreté de mes données soit utilisée à des fins commerciales et d'enrichissement du propriétaire de Rest'o'Propre.</NormalText>
                            <NormalText style={{marginHorizontal: 10}}>J'accepte également le reste des conditions que je ne m'embêterai jamais à lire, parce que quand même, personne ne lit ces règles... D'ailleurs, pour l'annecdote, quand on prend une photo sur Snapchat, ils ont le droit de la sauvegarder sur leur serveurs même si vous la supprimez.</NormalText>
                            <Button action={goToNext("user")} width="50%" text="S'inscrire"/>
                        </Form>)
                    }
                }},
                "pro": {

                }
            },
            "login": {
                "form": (<View><Button text="Test2"/></View>)
            }
        }
    }

    return (
        <View onLayout={onLayout} style={{ flex: 1 }}>
            <ImageBackground
                source={background_img}
                resizeMode="cover"
                style={{ flex: 1, alignItems: 'center', justifyContent: "space-between"}}>
                    <Image source={logo} style={{maxHeight: "40%", aspectRatio: 1}}/>
                    
                    {form}
            </ImageBackground>
        </View>
    );
}