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


const Hello = (texto)=>{
  const [ name,setName ] = useState('Tayse ');
  const [ backupName, setBackupName] = useState('');

  const handleClick = () => {
    setBackupName(name)
  }

  return(
    <View>
      <Input value={name} onChangeText={t=>setName(t)} />

      <Button 
        title="Trocar nome para João"
        onPress={ handleClick }
      />

      <Text> { backupName } </Text>
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