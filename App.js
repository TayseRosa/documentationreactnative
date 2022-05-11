import React, { useState } from 'react';
import { View, Text } from 'react-native';
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


const Hello = (texto)=>{
  const [ name,setName ] = useState('Tayse');

  return(
    <View>
      <Input value={name} onChangeText={t=>setName(t)} />
      <Text> Olá { name } </Text>
      <Text> Digite aguma coisa no TextInput acima. </Text>
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