import React, { forwardRef, useImperativeHandle, useState } from 'react';
import {
  Modal as ModalRN,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export type ModalHandles = {
  open: () => void;
};

export const Modal = forwardRef((_, ref) => {
  const [isVisible, setIsVisible] = useState(false);

  useImperativeHandle(
    ref,
    () => ({
      open: handleOpen,
      close: handleClose,
    }),
    []
  );

  const handleOpen = () => setIsVisible(true);

  const handleClose = () => setIsVisible(false);

  return (
    <ModalRN animationType="fade" transparent visible={isVisible}>
      <View style={styles.background}>
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={handleClose}
          >
            <Text style={styles.textButton}>Fechar modal</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ModalRN>
  );
});

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '90%',
    paddingVertical: 32,
    borderRadius: 8,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
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
