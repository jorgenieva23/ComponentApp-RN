import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';

import { colors } from '../../../config/theme/theme';
import { Pressable } from 'react-native-gesture-handler';
import { useAnimation } from '../../hooks/useAnimation';

export const Animation101Screen = () => {
  const { animatedOpacity, animatedTop, fadeTo, moveY } = useAnimation();

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.purpleBox,
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

      <Pressable
        onPress={() => {
          fadeTo({ from: 0, toValue: 1 });
          moveY({
            from: -100,
            to: 0,
            duration: 750,
            easing: Easing.bounce,
          });
        }}
        style={{ marginTop: 10 }}>
        <Text>FadeIn</Text>
      </Pressable>

      <Pressable
        onPress={() => {
          fadeTo({ toValue: 0 });
          moveY({
            from: 0,
            to: -100,
            duration: 750,
            easing: Easing.elastic(1),
          });
        }}
        style={{ marginTop: 10 }}>
        <Text>FadeOut</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  purpleBox: {
    backgroundColor: colors.primary,
    width: 150,
    height: 150,
  },
});
