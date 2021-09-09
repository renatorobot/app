/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
//import React, { Component } from 'react';
import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, SafeAreaView, StatusBar} from 'react-native';
import Estilos from './estilos/Estilos.js';



export default function App1(){

  const[cor, setCor]=useState("black")

  return (
    <SafeAreaView style={Estilos.conteiner}>
      <StatusBar 
      backgroundColor={cor}
      barStyle="default" 
      hidden={false}
      />
      <Text>Curso de React Native</Text>
      <Text>Curso de React Native</Text>

      <Button title="vermelho"
      onPress={()=>setCor("red")}
      />

      <Button title="Azul"
      onPress={()=>setCor("blue")}
      />

      <Button title="Verde"
      onPress={()=>setCor("green")}
      />
  
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