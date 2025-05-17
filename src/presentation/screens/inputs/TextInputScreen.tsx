import React, { useContext, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { Card } from '../../components/ui/Card';
import { globalStyles } from '../../../config/theme/theme';
import { ThemeContext } from '../../context/ThemeContext';

export const TextInputScreen = () => {
  const { colors } = useContext(ThemeContext);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });
  return (
    <ScrollView>
      <CustomView margin>
        <Title text="text Inputs" safe />
        <Card>
          <TextInput
            style={[
              globalStyles.input,
              { color: colors.text, backgroundColor: colors.background },
            ]}
            placeholder="nombre completo"
            placeholderTextColor={colors.PlaceholderText}
            autoCapitalize={'words'}
            autoCorrect={false}
            onChangeText={value => setForm({ ...form, name: value })}
          />

          <TextInput
            style={[
              globalStyles.input,
              { color: colors.text, backgroundColor: colors.background },
            ]}
            placeholder="email"
            placeholderTextColor={colors.PlaceholderText}
            autoCapitalize={'none'}
            keyboardType="email-address"
            autoCorrect={false}
            onChangeText={value => setForm({ ...form, email: value })}
          />
          <TextInput
            style={[
              globalStyles.input,
              { color: colors.text, backgroundColor: colors.background },
            ]}
            placeholder="phone"
            placeholderTextColor={colors.PlaceholderText}
            keyboardType="phone-pad"
            autoCorrect={false}
            onChangeText={value => setForm({ ...form, phone: value })}
          />
        </Card>
        <View style={{ height: 10 }} />
        <Card>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
        </Card>
        <Card>
          <TextInput
            style={globalStyles.input}
            placeholder="nombre completo"
            autoCapitalize={'words'}
            autoCorrect={false}
            onChangeText={value => setForm({ ...form, name: value })}
          />
        </Card>
      </CustomView>
    </ScrollView>
  );
};
