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

const estilos = StyleSheet.create({

  container: {

    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',

  },

  txt0: {

    color: '#0f0',
    fontSize: 10,
    
  }

});


export default function App1(){
  return (
    <View style={estilos.container}>
      <C1 curso="React Native" nota="10" cor="#ff"/>
      <C1 curso="C++" nota="10" cor="#f0f"/>
      <C1 curso="JavaScript" nota="10" cor="#0ff"/>
      <C1 curso="C#" nota="10" cor="#000"/>
      <Text style={estilos.txt0}>youtube.com/cfbcursos</Text>
      <Text style={{color: '#f00', fontSize: 30}}>youtube.com/cfbcursos</Text>
    </View>
  );
};
