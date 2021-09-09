
import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App1(){

  const [curso, setCurso]=useState(null);

  const Armazenar = (chave, valor) => {
    AsyncStorage.setItem(chave, valor)
  }

  const Buscar = async (chave) => {

    const valor = await AsyncStorage.getItem(chave)
    setCurso(valor)

  }

  Armazenar('01', 'React Native')
  Armazenar('02', 'Java')
  Armazenar('03', 'C++')
  Armazenar('04', 'PHP')


  Buscar('01')

  return(

    <View>
      <Text>Amazenamento Local Async - Storage</Text>
      <Text>Curso de {curso}</Text>
    </View>

  );

};


