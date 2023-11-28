import { StyleSheet } from 'react-native';

const Tela2Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  containerBoasVindas: {
    position: 'absolute',
    top: 70,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  boasVindas: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  titulo: {
    fontSize: 45,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: 'white',
  },
  subtitulo: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: 'white',
  },
  botaoChamada: {
    backgroundColor: '#1E1D43',
    padding: 10,
    marginBottom: 10,
    borderRadius: 50,
    alignItems: 'center',
  },
  botaoSair: {
    backgroundColor: '#1E1D43',
    padding: 20,
    position: 'absolute',
    bottom: 10,
    right: 10,
    borderRadius: 50,
  },
  textoBotao: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Tela2Styles;
