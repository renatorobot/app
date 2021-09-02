/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
//import React, { Component } from 'react';
import React from 'react';
import {StyleSheet, Text, View, Image, Button, Alert, ImageBackground} from 'react-native';
import C1 from './componentes/comp1';
import Caixas from './componentes/Caixas';
import Lp from './componentes/ListaPlana';
import Estilos from './estilos/Estilos.js';

const img1 = './assets/imagens/bg1.jpg';
const img2 = './assets/imagens/bg2.jpg';


export default function App1(){
  return (
    <View style={Estilos.conteiner}>
      <ImageBackground 

        source={require(img2)}
        style={estilos.imagenFund}

      >
        <View>
          <Text>Curso de React Native</Text>
          <Text>Curso de React Native</Text>
          {/*<Lp/>*/ }
        </View>
      </ImageBackground>
    </View>
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