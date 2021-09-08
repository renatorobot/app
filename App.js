/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
//import React, { Component } from 'react';
import React, {useState} from 'react';
import {StyleSheet, Text, View,Button} from 'react-native';
import Estilos from './estilos/Estilos.js';
import CarroC from './componentes/CarroC';
import CarroF from './componentes/CarroF';


export default function App1(){


  return (
    <View style={Estilos.conteiner}>
        <View>
          <Text>Curso de React Native</Text>
          <Text>Curso de React Native</Text>
          <CarroC nome="GOLF" />
          <CarroC nome="Corola" />
          <CarroC nome="Jetta" />
          <CarroC nome="Troller" />
        </View>
    </View>
  )
}

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