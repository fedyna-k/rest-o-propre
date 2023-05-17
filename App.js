import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  TextInput, View } from 'react-native';
import MapView from 'react-native-maps';
import React, { useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { Appbar } from 'react-native-paper';
// import { NavigationBar } from 'react-native-navigation';

export default function App() {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    console.log('Recherche :', searchText);
    // Effectuer l'action de recherche ici
  };

  return (
    <View style={styles.container}>
      <PaperProvider>
        <NavigationContainer>
          <Appbar.Header>
            <Appbar.Content title="Rest'o'propre" />
            <TextInput
              style={[styles.searchInput,{ flex: 1.5 }]}
              placeholder="Rechercher un Restaurant"
              value={searchText}
              onChangeText={text => setSearchText(text)}
              onSubmitEditing={handleSearch}
            />
          </Appbar.Header>
          <MapView style={styles.map} />
        </NavigationContainer>
      </PaperProvider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    flex: 1,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 10,
    color: '#000',
    fontSize: 16,
  },
});
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   map: {
//     width: '100%',
//     height: '100%',
//   }
// });


