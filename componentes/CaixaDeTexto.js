import React, {useState} from 'react'
import {View, TextInput, Text} from 'react-native'


export default function(){


    const [nome, setNome] = useState("Bruno")

    return (
        <View>
            <Text>Digite seu nome: </Text>
            <TextInput 
            
            style={{borderWidth:1, borderColor: '#000'}}
            onChangeText={text=>setNome(text)}
            />
            
            <Text>{nome}</Text>
           
        </View>
    )


}