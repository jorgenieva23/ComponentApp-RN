import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';
import Dialog from 'react-native-dialog';

import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { globalStyles } from '../../../config/theme/theme';
import { Button } from '../../components/ui/Button';
import { AlertPrompt } from '../../components/ui/AlertPrompt';

export const AlertScreen = () => {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState('');

  const createTwoButtonAlert = () => {
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
  };

  const createThreeButtonAlert = () => {
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
  };

  const handleCancel = () => {
    setVisible(false);
    setEmail('');
  };

  const handleSubmit = () => {
    console.log('Correo ingresado:', email);
    setVisible(false);
    setEmail('');
  };

  return (
    <CustomView style={globalStyles.globalMargin}>
      <Title safe text="Alert" />
      <Button text="Alerta - 1 botones" onPress={createTwoButtonAlert} />
      <View style={{ height: 10 }} />
      <Button text="Alerta - 3 botones" onPress={createThreeButtonAlert} />
      <View style={{ height: 10 }} />
      <Button text="Prompt" onPress={() => setVisible(true)} />

      <AlertPrompt
        visible={visible}
        value={email}
        title={'coloca tu mail'}
        text={'ejemplo@correo.com'}
        onChange={setEmail}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
      />
    </CustomView>
  );
};
