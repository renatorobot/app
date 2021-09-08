/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
//import React, { Component } from 'react';
import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, SafeAreaView} from 'react-native';
import Estilos from './estilos/Estilos.js';
import Rolagem from './componentes/Rolagem'


export default function App1(){


  return (
    <SafeAreaView style={Estilos.conteiner}>

      <Text>Curso de React Native</Text>
      <Text>Curso de React Native</Text>
      <Rolagem/>
  
    </SafeAreaView>
    
  );
};

const estilos = StyleSheet.create({

  logo:{
    width: 250,
    resizeMode: 'contain'

  
  },

  imagenFund:{
    
    flex: 1,
    resizeMode: 'cover',
    width: "100%",
  }

})