import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const words = [
  { id: '1', odia: 'ନମସ୍କାର', transliteration: 'Namaskār', english: 'Hello' },
  { id: '2', odia: 'ଧନ୍ୟବାଦ', transliteration: "Dhan'yabād", english: 'Thank you' },
  { id: '3', odia: 'ଆପଣ କେମିତି ଅଛନ୍ତି?', transliteration: 'Āpaṇa kemiti achanti?', english: 'How are you?' },
];

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'NotoSerifOdia': require('./assets/fonts/NotoSerifOdia-Regular.ttf'),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.odia}>{item.odia}</Text>
      <Text style={styles.transliteration}>{item.transliteration}</Text>
      <Text style={styles.english}>{item.english}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Learn Odia</Text>
      <FlatList
        data={words}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#f2f2f2',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  odia: {
    fontSize: 26,
    fontFamily: 'NotoSerifOdia',
  },
  transliteration: {
    fontSize: 16,
    color: '#555',
  },
  english: {
    fontSize: 18,
    color: '#333',
    marginTop: 4,
  },
});