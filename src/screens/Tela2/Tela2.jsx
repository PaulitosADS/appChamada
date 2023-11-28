import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Tela2Styles from './Tela2Styles';
import { useNavigation, useRoute } from '@react-navigation/native';

const Tela2 = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const nomeProfessor = route.params?.nomeProfessor || 'Nome do Professor';
  

  const realizarChamada = () => {
    navigation.navigate('Tela3');
  };

  const voltarParaTela1 = () => {
    navigation.goBack();
  };

  const sairParaTela1 = () => {
    navigation.navigate('Tela1');
  };

  return (
    <LinearGradient colors={['#0DA6C2', '#320DAF']} style={Tela2Styles.container}>
      <View style={Tela2Styles.containerBoasVindas}>
        <Text style={Tela2Styles.boasVindas}>BEM VINDO - {nomeProfessor}</Text>
      </View>
      <Text style={Tela2Styles.titulo}>CHAMADA ELETRÔNICA</Text>
      <Text style={Tela2Styles.subtitulo}>UNIPAR</Text>
      <TouchableOpacity style={Tela2Styles.botaoChamada} onPress={realizarChamada}>
        <Text style={Tela2Styles.textoBotao}>Realizar Chamada</Text>
      </TouchableOpacity>
      <TouchableOpacity style={Tela2Styles.botaoSair} onPress={voltarParaTela1}>
        <Text style={Tela2Styles.textoBotao}>Sair</Text>
      </TouchableOpacity>
      <TouchableOpacity style={Tela2Styles.botaoSair} onPress={sairParaTela1}>
        <Text style={Tela2Styles.textoBotao}>Sair</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Tela2;
