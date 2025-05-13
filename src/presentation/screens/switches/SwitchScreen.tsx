import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import { CustomView } from '../../components/ui/CustomView';
import { Card } from '../../components/ui/Card';
import { CustomSwitch } from '../../components/ui/CustomSwitch';

interface Props {
  dinero: boolean;
  edad: boolean;
  energia: boolean;
}

export const SwitchScreen = () => {
  const [state, setState] = useState({
    dinero: false,
    edad: false,
    energia: false,
  });

  const handleSwitchChange = (switchName: keyof Props) => {
    const nuevosValores = { ...state };

    const activos = Object.values(nuevosValores).filter(v => v).length;

    if (activos === 2) {
      Object.keys(nuevosValores).forEach(key => {
        if (key !== switchName && nuevosValores[key as keyof Props]) {
          nuevosValores[key as keyof Props] = false; 
        }
      });
      nuevosValores[switchName] = true; 
    } else {
      nuevosValores[switchName] = !nuevosValores[switchName];
    }

    setState(nuevosValores);
  };

  return (
    <CustomView style={{ marginTop: 100, paddingHorizontal: 10 }}>
      <Card style={{ marginBottom: 10 }}>
        <CustomSwitch
          isOn={state.dinero}
          onChange={() => handleSwitchChange('dinero')}
          text="dinero"
        />
      </Card>
      <Card style={{ marginBottom: 10 }}>
        <CustomSwitch
          isOn={state.edad}
          onChange={() => handleSwitchChange('edad')}
          text="edad"
        />
      </Card>
      <Card style={{ marginBottom: 10 }}>
        <CustomSwitch
          isOn={state.energia}
          onChange={() => handleSwitchChange('energia')}
          text="energia"
        />
      </Card>
    </CustomView>
  );
};

const styles = StyleSheet.create({});
