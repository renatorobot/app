import React from 'react';
import {StyleSheet, Text} from 'react-native';

let nt;
let cor;

export default function comp1 (props){

    nt = props.nota
    cor=props.cor

    return (
        <Text style={estilos.txt2, {color: cor}}>CFB CURSOS - Curso de {props.curso}: Nota={nt}</Text>
    )
}

const estilos = StyleSheet.create({
    
    txt1:{
        color: '#f00',
        fontSize: 20,
    },

    txt2:{

        //color: '#00f',
        fontSize: 15,

    }

});