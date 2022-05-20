<h1 align="center"> React Native - Documentação do básico ao avançado completinho 😊</h1>

#Índice
- [Demo](#demo)
- [🛠 Sobre o projeto](#-sobre-o-projeto)
  - [Criar um novo projeto](#criar-um-novo-projeto)
  - [Props e States](#props-e-states)
  - [InputText - Campo de Input de texto](#inputtext---campo-de-input-de-texto)
  - [Mudando State com botões](#mudando-state-com-botões)
  - [Condicional de Exibição](#condicional-de-exibição)
  - [Criando input de senha (oculto)](#input-de-senha-oculto)
- [🚀 Tecnologias utilizadas neste projeto](#-tecnologias-utilizadas-neste-projeto)
- [📥 Como usar](#-como-usar)
- [🚀 Autor](#-autor)
  

# Demo
<p align="center">
<img src="./readme.gif" align="center" />
</p>

---
# 🛠 Sobre o projeto

<p>Documentação de React Native do básico ao avançado completinho 😊😊😊 .</p>

## Criar um novo projeto
```js
   $ npx react-native init [nomeDoProjeto]
   $ cd [nomeDoProjeto]
   $ cd android
   $ chmod +x ./gradlew
   (...abrir o emulador)
   (...abrir o app)
   $ npx react-native run-android
   $ npx react-native start
```
    
## Props e States
```js
const Hello = ( {frase} )=>{
  const [ name,setName ] = useState('Tayse');

  return(
    <View>
      <Text> Oi, eu sou uma STATE: { frase } </Text> 
      <Text> Oi, eu sou uma PROP: { name } </Text> 
    </View>
  )
}

export default()=>{
  return(
    <Page>
      <Hello frase={"Seja bem vindo!"}  />      
    </Page>
  )
```

## InputText - Campo de Input de texto
```js
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
```

## Mudando State com botões
```js
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
```

## Condicional de Exibição
```js
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
```

## Input de senha (oculto)
```js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


import Icon from 'react-native-vector-icons/FontAwesome';

export default()=>{

  const [ password, setPassword ] = useState('');
  const [ hidePassword, setHidePassword ] = useState(true);

  return(
    <View style={{flex:1,
      backgroundColor:'#dedede',
      alignItems:'center',
      justifyContent:'center'}
      }>

      <View
        style={{
          flexDirection:'row',
          width: '90%',
          backgroundColor:'#121212',
          borderRadius:5,
          height: 50,
          alignItems:'center'
        }}
      >

          <TextInput 
            placeholder='Insira sua senha'
            placeholderTextColor={'#fff'}
            value={password}
            onChangeText={t=>setPassword(t)}
            secureTextEntry={hidePassword} //Esconde a senha, transforma em bolinha
            style={{
              width: '90%',
              height: 50,
              color:'#fff',
              padding: 8
            }}
          />

          <TouchableOpacity
            onPress={()=> setHidePassword(!hidePassword)}
            style={{
              width: '10%',
              height:50,
              justifyContent:'center',
              alignItems:'center'
            }}
          >
            { hidePassword
            ?
            <Icon name='eye' size={25} color={'#fff'} />
            :
            <Icon name='eye-slash' size={25} color={'#fff'} />
            }
          </TouchableOpacity>

      </View>

    </View>
  )
}
```
## Campo de email com máscara
```js
import React, {useState} from 'react';
import { View, TextInput, Button} from 'react-native';
import * as Yup from 'yup';

export default()=>{

  const [ email, setEmail ] = useState('');

  async function handleRegister(){
    try{
      const schema = Yup.object().shape({
        email:Yup.string().email().required()
      })
  
      await schema.validate({email})
      alert('Passou');
    }catch(error){
      if(error instanceof Yup.ValidationError){
        alert('Campo email obrigatório')
      }
    }
  }

  return(
    <View style={{flex:1,
      backgroundColor:'#dedede',
      alignItems:'center',
      justifyContent:'center'}
      }>

          <TextInput 
            placeholderTextColor={'#fff'}
            placeholder='Seu e-mail'
            value={email}
            onChangeText={t=>setEmail(t)}
            style={{
              backgroundColor:'#141414',
              width:'90%',
              borderRadius:10,
              padding:3
            }}
          />
        <Button
          title="Salvar"
          style={{
            backgroundColor:'orange',
            color:'#000',
            marginTop:50
          }}
          onPress={handleRegister}
        />
    </View>
  )
}

/*Fonte: https://www.npmjs.com/package/yup*/
```

## Modal
```js
import React, { useState } from 'react';
import { View, Text, Button, TOuchableOpacity, Modal } from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex:1;
  justify-content: center;
  align-items: center;
  background-color:#ccc;
`;

const ModalButton = styled.TouchableOpacity`
  width:90%;
  padding:10px 30px;
  background:blue;
  border-radius:10px;
  justify-content:center;
  align-items: center
`;

const ModalButtonText = styled.Text`
  color:white;
`;

const ModalBox = styled.View`
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,0.7);
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.View`
  width:90%;
  height:200;
  background: white;
  border-radius:10px;
`;

const ModalHeader = styled.View`
  background:black;
  width:100%;
  padding:10px;
  justify-content: space-between;
  align-items: flex-end;
`;

const ModalTextHeader = styled.Text`
  color:white;
`;

export default()=>{

  const [ modalVisible, setModalVisible ] = useState(false);

  return(
    <Page>

      <ModalButton onPress={()=>setModalVisible(true)}>
        <ModalButtonText> Abrir o modal </ModalButtonText>
      </ModalButton>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={false}
        onRequestClose={()=>setModalVisible(false)}
      >
        <ModalBox>
          <ModalContent>
            <ModalHeader>
              <ModalTextHeader onPress={()=>setModalVisible(false)} > x </ModalTextHeader>
            </ModalHeader> 
          </ModalContent>
        </ModalBox>

      </Modal>
    </Page>
  )
}
```

# 🚀 Tecnologias utilizadas neste projeto

- [x] JAVASCRIPT
- [x] REACT NATIVE

# 📥 Como usar
```js

    //Clonar o repositório
    $ git clone https://github.com/TayseRosa/documentationreactnative.git

    //Entrar no diretório
    $ cd documentationreactnative

    //Instalar bilbiotecas
    $ npm install

    //Startar o projeto
    $ npm start

``` 

# 🚀 Autor

<a href="https://www.tayserosa.dev">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/31596454?v=4" width="100px;" alt="Tayse Rosa" style="border-radius:50%"/>
 <br />
 <sub><b>www.tayserosa.dev</b></sub></a> <a href="https://www.tayserosa.dev" title="Tayse Rosa" target="_blank">🚀</a>


Feito com ❤️ por Tayse Rosa 🚀

👋🏽 Entre em contato!

![Linkedin Badge](https://img.shields.io/badge/-TayseRosa-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/tayse-rosa-3b683151/)[![GitHub Badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/TayseRosa/)
