import React, { useCallback, useEffect, useState } from 'react';
import { BackHandler } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import * as NavigationBar from 'expo-navigation-bar';
import * as StatusBar from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import * as Location from 'expo-location';

import Navbar from './src/components/navbar/Navbar';
import Header from './src/components/header/Header';
import Accueil from './src/pages/Accueil';
import Notes from './src/pages/Notes';
import Favoris from './src/pages/Favoris';
import Connect from './src/pages/Connect';

import NavbarPro from './src/components/navbar/NavbarPro';
import HeaderPro from './src/components/header/HeaderPro';
import AccueilPro from './src/pages/AccueilPro';
import Suivi from './src/pages/Suivi';
import Formations from './src/pages/Formation';

SplashScreen.preventAutoHideAsync();
NavigationBar.setBackgroundColorAsync("white");
NavigationBar.setButtonStyleAsync("dark");
StatusBar.setStatusBarBackgroundColor("#f3f3f3")

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [page, setPage] = useState("connect");
  const [pageStack, setStack] = useState(["restaurant"]);
  const [isPro, setIsPro] = useState(false);
  const [onMap, setOnMap] = useState(false);
  const [location, setLocation] = useState(null);
  const [user, setUser] = useState({});


  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(MaterialIcons.font);
        await Font.loadAsync({
          Regular: require("./assets/fonts/Inter-Regular.ttf"),
          Light: require("./assets/fonts/Inter-ExtraLight.ttf"),
          Bold: require("./assets/fonts/Inter-ExtraBold.ttf")
        });

        let {status} = await Location.requestForegroundPermissionsAsync();
        if (status === "granted") {
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);
        } else {
          let location = {coords: {longitude: 43.295961, latitude: 5.377510}}
          setLocation(location);
        }
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    if (page != pageStack.at(-1)) {
      setStack(pageStack.concat(page));
    }
    if (page == pageStack.at(-2)) {
      setStack(pageStack.slice(0, -1));
    }
  }, [page]);

  BackHandler.addEventListener("hardwareBackPress", () => {
    if (page == "connect") return true;

    if (page != "restaurant") {
      setPage(pageStack.at(-2));
      return true;
    }

    BackHandler.exitApp();
    return false;
  });

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  if (page == "connect") {
    return (
      <Connect page={page} pageSetter={setPage} userSetter={setUser} proSetter={setIsPro} onLayout={onLayoutRootView} />
    );
  }

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: 'center', justifyContent: "space-between", backgroundColor: "#e6e6e6" }}
      onLayout={onLayoutRootView}>
      {isPro ?
        <HeaderPro
          text={{"restaurant": `Bienvenue ${user.first_prop} !`, "show-chart": "Suivi", "school": "Formations", "person": user.name}[page]}
          includeSearch={page == "show-chart" || page == "school"}
          placeholder={{"show-chart": "Bilan financier, ajout aliment...", "school": "Respect de la qualité, dressage"}[page]} /> :
        <Header
          text={`${user.first} ${user.last.toUpperCase()}`}
          includeMap={page == "restaurant" ? {onMap, setOnMap} : false}
          searchbarInside={!onMap} />
      }
      
      {{
        "restaurant": isPro ? <AccueilPro /> : <Accueil onMap={onMap} location={location} />,
        "star": (<Notes userid={user._id} />),
        "favorite": (<Favoris />),
        "show-chart": <Suivi />,
        "school": <Formations />
      }[page]}
      

      {isPro ? <NavbarPro current={page} pageSetter={setPage} /> : <Navbar current={page} pageSetter={setPage} />}
    </SafeAreaView>
  );
}