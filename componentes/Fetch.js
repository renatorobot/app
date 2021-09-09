
import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';

export default function(){

  const [carregando, setCarregando] = useState(true);
  const [dados, setDados] = useState([]);

  useEffect (

    () =>{

      fetch('http://cfbcursos.com.br/filmes.json') 
      .then((resp)=>resp.json())
      .then((json)=>setDados(json.filmes))
      .catch(()=>(alert("Erro ao carregar os filmes")))
      .finally(()=>setCarregando(false))

    },[]

  )


  return(

    <View>
     {
       carregando ? <ActivityIndicator/> : (
         <FlatList

         data={dados}
         keyExtractor={({id}, index) => id}
         renderItem={({item})=>(

          <Text>{item.titulo}, {item.AnoLancamento}</Text>

         )}
         
         />
       )
     }
    </View>

  );

};


