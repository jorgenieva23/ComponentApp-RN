import React from 'react';
import Dialog from 'react-native-dialog';

interface Props {
  visible: boolean;
  value: string;
  title: string;
  text: string;
  onChange?: (text: string) => void;
  onCancel: () => void;
  onSubmit: () => void;
}

export const AlertPrompt = ({
  visible,
  value,
  title,
  text,
  onChange,
  onCancel,
  onSubmit,
}: Props) => {
  return (
    <Dialog.Container visible={visible}>
      <Dialog.Title>{title}</Dialog.Title>
      <Dialog.Input placeholder={text} value={value} onChangeText={onChange} />
      <Dialog.Button label="Cancelar" onPress={onCancel} />
      <Dialog.Button label="Aceptar" onPress={onSubmit} />
    </Dialog.Container>
  );
};
