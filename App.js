import React, { useCallback, useEffect, useState } from 'react';
import { Text, BackHandler } from 'react-native';
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

SplashScreen.preventAutoHideAsync();
NavigationBar.setBackgroundColorAsync("white");
NavigationBar.setButtonStyleAsync("dark");
StatusBar.setStatusBarBackgroundColor("#f3f3f3")

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [page, setPage] = useState("restaurant");
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
    if (page != "home") {
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

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: 'center', justifyContent: "space-between", backgroundColor: "#e6e6e6" }}
      onLayout={onLayoutRootView}>
      <Header
        current={page}
        pageSetter={setPage}
        username="Kevin FEDYNA"
        includeMap={page == "restaurant" ? {onMap, setOnMap} : false}
        searchbarInside={!onMap} />

      <Accueil onMap={onMap} location={location} />

      <Navbar current={page} pageSetter={setPage} />
    </SafeAreaView>
  );
}