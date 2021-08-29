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

/*


Arrow function 

(n) => {return n * 2}
n => return n * 2

(n1, n2) => {return n1 + n2}


*/


const dobro = (n) => n * 2


const soma = (n1, n2) => n1 + n2;


export default function App1(){

  let vexibir = true;

  return (
    <View style={Estilos.conteiner}>


      <Button 
      title="mostar mensagem"
      onPress={()=>Alert.alert('Mensagem', 'Curso de React Native')}
      /> 

      <Text>{dobro(2)}</Text>
      <Text>{soma(2, 4)}</Text>

      <Image
        source={require('./assets/logo.png')}
        style={estilos.logo}
      />
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


const estilos = StyleSheet.create({

  logo:{
    width: 250,
    resizeMode: 'contain'

  
  }

})