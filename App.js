import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex:1;
  justify-content: center;
  align-items: center;
  background-color:#ccc;
`;

const Input = styled.TextInput`
  width:200px;
  height:40px;
  border: 1px solid #000;
`;

const Quadrado = styled.View`
  width: 200px;
  height: 200px;
  margin-top:30px;
  border:5px dashed #000;
  justify-content: center;
  align-items: center;
`;


const Hello = (texto)=>{
  const [ name,setName ] = useState('Tayse ');
  const [ mostrar,setMostrar ] = useState( false );

  const handleClick = () => {
    //Uma forma de if bem curtinha, que sempre inverte o valor, ou true ou false
    setMostrar(!mostrar)
  }

  return(
    <View>
      <Input value={name} onChangeText={t=>setName(t)} />

      <Button title={mostrar ? 'Ocultar nome' : 'Mostrar nome'} onPress={ handleClick } />

    {mostrar && 
      <Quadrado>
        <Text> Seu nome é: </Text>
        <Text> {name} </Text>
      </Quadrado>
     }

    </View>
  )
}

export default()=>{
  return(
    <Page>
      <Hello />
    </Page>
  )
}