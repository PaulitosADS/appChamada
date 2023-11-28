import { StyleSheet } from 'react-native';

const Tela3Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 35,
    marginBottom: 16,
  
  },
  selectedStudentItem: {
    backgroundColor: '#4caf50',
    padding: 10,
    margin: 5,
    borderRadius: 8,
  },
  studentItemText: {
    color: '#000',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    padding: 12,
    borderRadius: 8,
    width: '48%',
  },
  confirmButton: {
    backgroundColor: '#2196f3',
  },
  backButton: {
    backgroundColor: '#f44336',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default Tela3Styles;