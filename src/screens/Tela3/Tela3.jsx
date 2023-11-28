import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Tela3Styles from './Tela3Styles';

const Tela3 = () => {
  const navigation = useNavigation();
  const [selectedStudents, setSelectedStudents] = useState([
    { label: 'ALISSON FERNANDO' },
    { label: 'ANDERSON RIBEIRO' },
    { label: 'CLAOCIO HEIDEN JÚNIOR' },
    { label: 'GABRIEL ALOVISE BRAMBILA' },
    { label: 'GABRIEL BAO' },
    { label: 'GABRIEL HENRIQUE ADRIA' },
    { label: 'HIGOR ANTONIAZZI' },
    { label: 'JOÃO PAULO POSSAMAI' },
    { label: 'KATHLEEN KAUANA DA SILVA' },
    { label: 'MARIA FERNANDA CATANI' },
    { label: 'PAULO RICARDO G COSTA' }
  ]);
  const [whatsappNumber, setWhatsappNumber] = useState('+5546999106122');

  const toggleStudentSelection = (label) => {
    setSelectedStudents((prevStudents) =>
      prevStudents.some((student) => student.label === label)
        ? prevStudents.filter((student) => student.label !== label)
        : [...prevStudents, { label }]
    );
  };

  const renderStudentItem = (item) => {
    const isSelected = selectedStudents.some((student) => student.label === item.label);

    return (
      <TouchableOpacity
        key={item.label}
        style={isSelected ? Tela3Styles.selectedStudentItem : Tela3Styles.studentItem}
        onPress={() => toggleStudentSelection(item.label)}
      >
        <Text style={Tela3Styles.studentItemText}>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  const sendToWhatsApp = () => {
    const sortedStudents = selectedStudents.map((student) => student.label).sort();
    const formattedDate = new Date().toLocaleDateString('pt-BR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    const formattedTime = new Date().toLocaleTimeString('pt-BR');

    const message = `*LISTA DE PRESENÇA*\n\n*Data:* ${formattedDate}\n\n*Disciplina:* <Nome da Disciplina>\n\n*Professor:* <Nome do Professor>\n\n*Horário da Chamada:* ${formattedTime}\n\n*Alunos Presentes:*\n${sortedStudents.map((student) => `• ${student}`).join('\n')}`;

    const whatsappUrl = `whatsapp://send?text=${encodeURIComponent(message)}&phone=${whatsappNumber}`;

    Linking.openURL(whatsappUrl)
      .catch((error) => console.error('Erro ao abrir o WhatsApp:', error));
  };

  const irParaTela2 = () => {
    navigation.navigate('Tela2');
  };

  return (
    <View style={Tela3Styles.container}>
      <Text style={[Tela3Styles.title, { fontWeight: 'bold', textAlign: 'center' }]}>LISTA DE PRESENÇA INVERSA</Text>
      <View style={Tela3Styles.studentList}>{selectedStudents.map(renderStudentItem)}</View>
      <View style={Tela3Styles.buttonContainer}>
        <TouchableOpacity
          style={[Tela3Styles.button, Tela3Styles.confirmButton]}
          onPress={sendToWhatsApp}
        >
          <Text style={Tela3Styles.buttonText}>Confirmar Presença</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[Tela3Styles.button, Tela3Styles.backButton]}
          onPress={irParaTela2}
        >
          <Text style={Tela3Styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Tela3;
