import { View, Text, StyleProp, ViewStyle } from 'react-native';
import React, { useContext } from 'react';
import { colors } from '../../../config/theme/theme';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
  style?: StyleProp<ViewStyle>;
}

export const Separator = ({ style }: Props) => {
  const { colors } = useContext(ThemeContext);
  return (
    <View style={{ backgroundColor: colors.cardBackground }}>
      <View
        style={[
          {
            alignSelf: 'center',
            width: '80%',
            height: 1.5,
            backgroundColor: colors.text,
            opacity: 0.1,
            marginVertical: 6,
          },
          style,
        ]}>
        <Text>Separator</Text>
      </View>
    </View>
  );
};

export default Separator;
