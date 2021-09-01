/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
//import React, { Component } from 'react';
import React from 'react';
import {StyleSheet, Text, View, Image, Button, Alert} from 'react-native';
import C1 from './componentes/comp1';
import Caixas from './componentes/Caixas';
import Lp from './componentes/ListaPlana';
import Estilos from './estilos/Estilos.js'


export default function App1(){
  return (
    <View style={Estilos.conteiner}>
      <Text>Curso de React Native</Text>
      <Text>Curso de React Native</Text>
      <Lp/>
    </View>
  );
};

const estilos = StyleSheet.create({

  logo:{
    width: 250,
    resizeMode: 'contain'

  
  }

})