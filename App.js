import React, { useCallback, useEffect, useState } from 'react';
import { Text, BackHandler } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import * as NavigationBar from 'expo-navigation-bar';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import Navbar from './src/components/navbar/Navbar';
import Header from './src/components/header/Header';

SplashScreen.preventAutoHideAsync();
NavigationBar.setBackgroundColorAsync("white");
NavigationBar.setButtonStyleAsync("dark");

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [page, setPage] = useState("restaurant");
  const [pageStack, setStack] = useState(["restaurant"]);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(MaterialIcons.font);
        await Font.loadAsync({
          Regular: require("./assets/fonts/Inter-Regular.ttf"),
          Light: require("./assets/fonts/Inter-ExtraLight.ttf"),
          Bold: require("./assets/fonts/Inter-ExtraBold.ttf")
        });
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
      style={{ flex: 1, alignItems: 'center', justifyContent: "space-between", backgroundColor: "#f3f3f3" }}
      onLayout={onLayoutRootView}>
      <Header current={page} pageSetter={setPage}></Header>

      <Text>Ca fait des build de navbar et de header</Text>

      <Navbar current={page} pageSetter={setPage}></Navbar>
    </SafeAreaView>
  );
}