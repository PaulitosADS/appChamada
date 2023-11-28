import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#750000',
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#ffffff',
  },
  subtitle: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#ffffff',
  },
  input: {
    height: 55,
    borderColor: '#ffffff',
    borderWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    fontSize: 16,

  },
  entrarButton: {
    backgroundColor: '#1E1D43',
    width:120,
    borderRadius: 50,
    marginTop: 20,
    padding: 10,
    textAlign: 'center',
    alignItems:'center',
  },
  buttonText: {
    backgroundColor: '#1E1D43',
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '900',
  },
});

export default styles;
