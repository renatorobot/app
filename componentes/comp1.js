import React from 'react';
import {StyleSheet, Text, Button} from 'react-native';
import Estilos from '../estilos/Estilos.js'


let nt;

export default function comp1 (props){

    nt = props.nota

    return (
        <Text style={Estilos.textoCursos}>CFB CURSOS - Curso de {props.curso}: Nota={nt}</Text>
        
    )

        

}