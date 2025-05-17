import React, { useContext } from 'react';
import { StyleSheet, Animated, Easing } from 'react-native';

import { useAnimation } from '../../hooks/useAnimation';
import { ThemeContext } from '../../context/ThemeContext';
import { CustomView } from '../../components/ui/CustomView';
import { Button } from '../../components/ui/Button';

export const Animation101Screen = () => {
  const { colors } = useContext(ThemeContext);
  const { animatedOpacity, animatedTop, fadeTo, moveY } = useAnimation();

  return (
    <CustomView style={styles.container}>
      <Animated.View
        style={[
          styles.purpleBox,
          {
            backgroundColor: colors.primary,
          },
          {
            opacity: animatedOpacity,
            transform: [
              {
                translateY: animatedTop,
              },
            ],
          },
        ]}
      />

      <Button
        text="FadeIn"
        onPress={() => {
          fadeTo({ from: 0, toValue: 1 });
          moveY({
            from: -100,
            to: 0,
            duration: 750,
            easing: Easing.bounce,
          });
        }}
        styles={{ marginTop: 10 }}
      />

      <Button
        text="fadeOut"
        onPress={() => {
          fadeTo({ toValue: 0 });
          moveY({
            from: 0,
            to: -100,
            duration: 750,
            easing: Easing.elastic(1),
          });
        }}
        styles={{ marginTop: 10 }}
      />
    </CustomView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  purpleBox: {
    width: 150,
    height: 150,
  },
});
