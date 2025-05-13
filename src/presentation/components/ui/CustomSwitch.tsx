import React from 'react';
import { View, Text, StyleSheet, Switch, Platform } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

interface Props {
  isOn: boolean;
  text?: string;
  onChange: (vale: boolean) => void;
}

export const CustomSwitch = ({ isOn, text, onChange }: Props) => {
  return (
    <View style={style.switchRow}>
      {text && <Text>{text}</Text>}
      <Switch
        thumbColor={Platform.OS === 'android' ? Colors.primary : ''}
        onValueChange={onChange}
        value={isOn}
      />
    </View>
  );
};

const style = StyleSheet.create({
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
});
