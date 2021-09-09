import React, {Component} from 'react';
//import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Globais from './componentes/Globais';


export default class App1 extends Component{

  nome = Globais.nome;
  canal = Globais.canal;
  num = Globais.num;

  render(){
    return (
      <View>
      <Text>{this.nome}</Text>
      <Text>{this.canal}</Text>
      <Text>{this.num}</Text>
    </View>
    );
  }
};
