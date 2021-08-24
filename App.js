/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
//import React, { Component } from 'react';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import C1 from './componentes/comp1'
import Estilos from './estilos/Estilos.js'


/*
export default class App1 extends Component{
  render(){
    return(
      <View>
      <View>
        <Text>CFB CURSOS</Text>
        <Text>Curso de React Native</Text>
      </View>
      <View>
        <Text>Aula 3</Text>
        <Text>www.cfbcursos.com.br</Text>
      </View>
    </View>
    );
  }
}
*/


export default function App1(){
  return (
    <View style={Estilos.conteiner}>
      <C1 curso="React Native" nota="10"/>
      <C1 curso="C++" nota="10"/>
      <C1 curso="JavaScript" nota="10"/>
      <C1 curso="C#" nota="10"/>
      <Text style={Estilos.textoPadrao}>youtube.com/cfbcursos</Text>
      <Text style={Estilos.textoTitulo}>youtube.com/cfbcursos</Text>
    </View>
  );
};
