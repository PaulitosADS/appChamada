// Tela1.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Importe LinearGradient
import Tela1Styles from './Tela1Styles';
import { useNavigation } from '@react-navigation/native';

const Tela1 = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [professores] = useState(['Cleiton', 'Rodrigo', 'Fabio', 'Administrador']);
  const [loggedProfessor, setLoggedProfessor] = useState('');

  const handleLogin = () => {
    const validPassword = 'unipar2023';

    if (!professores.includes(username)) {
      Alert.alert('Erro', 'Usuário não encontrado');
      return;
    }

    if (password !== validPassword) {
      Alert.alert('Erro', 'Senha incorreta');
      return;
    }

    console.log('Usuário:', username);
    console.log('Senha:', password);

    setLoggedProfessor(username); // Armazena o nome do professor logado

    navigation.navigate('Tela2', { nomeProfessor: username });
  };

  return (
    <LinearGradient colors={['#0DA6C2', '#320DAF']} style={Tela1Styles.container}>
      <Text style={Tela1Styles.title}>CHAMADA ELETRÔNICA</Text>
      <Text style={Tela1Styles.subtitle}>UNIPAR</Text>
      <TextInput
        style={Tela1Styles.input}
        placeholder="Usuário"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={Tela1Styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity
        style={Tela1Styles.entrarButton}
        onPress={handleLogin}
      >
        <Text style={Tela1Styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Tela1;
