import React, { useCallback, useEffect, useState } from 'react';
import { TextInput } from 'react-native';
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
import Login from './src/pages/Login'; // Importation du composant Login depuis le fichier ./src/pages/Login

SplashScreen.preventAutoHideAsync();
NavigationBar.setBackgroundColorAsync("white");
NavigationBar.setButtonStyleAsync("dark");
StatusBar.setStatusBarBackgroundColor("#f3f3f3")

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [page, setPage] = useState("connect");
  const [pageStack, setStack] = useState(["restaurant"]);
  const [onMap, setOnMap] = useState(false);
  const [location, setLocation] = useState(null);


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

  // if (page == "connect") {
  //   return (
  //     <Connect page={page} onLayout={onLayoutRootView} />
  //   );
  // }
  if (page === "connect") {
    return <Connect page={page} onLayout={onLayoutRootView} />;
  } else if (page === "Login") {
    return <LoginPage />;
  }
  
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: 'center', justifyContent: "space-between", backgroundColor: "#e6e6e6" }}
      onLayout={onLayoutRootView}>
      <Header
        text="Kevin FEDYNA"
        includeMap={page == "restaurant" ? {onMap, setOnMap} : false}
        searchbarInside={!onMap} />

      {{
        "restaurant": (<Accueil onMap={onMap} location={location} />),
        "star": (<Notes/>),
        "favorite": (<Favoris/>)
      }[page]}
      

      <Navbar current={page} pageSetter={setPage} />
    </SafeAreaView>
  );
}