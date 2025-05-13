import React, { useState } from 'react';
import { StyleSheet, Switch } from 'react-native';

import { CustomView } from '../../components/ui/CustomView';
import { Card } from '../../components/ui/Card';
import { CustomSwitch } from '../../components/ui/CustomSwitch';
import Separator from '../../components/ui/Separator';

export const SwitchScreen = () => {
  const [state, setState] = useState({
    dinero: false,
    edad: false,
    energia: false,
  });

  return (
    <CustomView style={{ marginTop: 100, paddingHorizontal: 10 }}>
      <Card>
        <CustomSwitch
          isOn={state.dinero}
          onChange={value => setState({ ...state, dinero: value })}
          text="dinero"
        />
      </Card>
      <Separator />
      <Card>
        <CustomSwitch
          isOn={state.edad}
          onChange={value => setState({ ...state, edad: value })}
          text="edad"
        />
      </Card>
      <Separator />
      <Card>
        <CustomSwitch
          isOn={state.energia}
          onChange={value => setState({ ...state, energia: value })}
          text="energia"
        />
      </Card>
    </CustomView>
  );
};

const styles = StyleSheet.create({});
