// useAnimation.js
import { useRef } from 'react';
import { Animated, EasingFunction } from 'react-native';

interface FadeToParams {
  from?: number;
  toValue: number;
  duration?: number;
  callback?: () => void;
}

interface MoveYParams {
  from: number;
  to: number;
  duration?: number;
  easing?: EasingFunction;
  callback?: () => void;
}

export const useAnimation = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(0)).current;

  const fadeTo = ({
    from,
    toValue,
    duration,
    callback = () => {},
  }: FadeToParams) => {
    if (from !== undefined) {
      animatedOpacity.setValue(from);
    }
    Animated.timing(animatedOpacity, {
      toValue,
      duration,
      useNativeDriver: true,
    }).start(callback);
  };

  const moveY = ({
    from,
    to,
    duration,
    easing = t => t,
    callback = () => {},
  }: MoveYParams) => {
    animatedTop.setValue(from);
    Animated.timing(animatedTop, {
      toValue: to,
      duration,
      easing,
      useNativeDriver: true,
    }).start(callback);
  };

  return {
    animatedOpacity,
    animatedTop,
    fadeTo,
    moveY,
  };
};
