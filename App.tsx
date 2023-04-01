import { useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Modal, ModalHandles } from './src/components/Modal';

export default function App() {
  const modalRef = useRef<ModalHandles>(null);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => modalRef.current?.open()}
      >
        <Text style={styles.textButton}>Abrir modal</Text>
      </TouchableOpacity>

      <Modal ref={modalRef} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 300,
    height: 50,
    backgroundColor: '#1c8fec',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    color: 'white',
  },
});
