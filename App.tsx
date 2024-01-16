import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import api from './src/services/api';
import Filmes from './src/Filmes';

interface FilmesProps {
  nome: string,
  id: string
}

export default function App() {

  const [filmes, setFilmes] = useState<FilmesProps[]>([]);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get('r-api/?api=filmes')
      setFilmes(response.data)
    }

    loadFilmes()
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        data={filmes}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <Filmes data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
