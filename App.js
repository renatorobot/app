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
import C1 from './componentes/comp1';
import Caixas from './componentes/Caixas';
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

/*
function fexibir(vp1){

  if(vp1){
    return (<Text>Curso de React Native</Text>)
  }else{
    return (<Text> - - -</Text>)
  }

}
*/



export default function App1(){

  let vexibir = true;

  return (
    <View style={Estilos.conteiner}>
      <Caixas exibir={vexibir}/>
      <C1 curso="React Native" nota="10"/>
      <C1 curso="C++" nota="10"/>
      <C1 curso="JavaScript" nota="10"/>
      <C1 curso="C#" nota="10"/>
      <Text style={Estilos.textoPadrao}>youtube.com/cfbcursos</Text>
      <Text style={Estilos.textoTitulo}>youtube.com/cfbcursos</Text>
      {vexibir?<Text>Curso de React Native</Text>:<Text> - - -</Text>}
      {vexibir && <Text>Curso de React Native</Text>}
    </View>
  );
};
