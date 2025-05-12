import React, { useRef, useState } from 'react';
import {
  Animated,
  PanResponder,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

type BoxProps = {
  color: string;
  label: string;
  id: string;
  activeId: string | null;
  setActiveId: (id: string | null) => void;
};

const DraggableBox = ({
  color,
  label,
  id,
  activeId,
  setActiveId,
}: BoxProps) => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,

      onPanResponderGrant: () => {
        setActiveId(id); // Activamos este box
        pan.extractOffset();
      },

      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
        useNativeDriver: false,
      }),

      onPanResponderRelease: () => {
        pan.flattenOffset();
        setActiveId(null); // Ya no está activo
      },
    }),
  ).current;

  const handleReset = () => {
    pan.flattenOffset();
    Animated.spring(pan, {
      toValue: { x: 0, y: 0 },
      useNativeDriver: false,
    }).start();
  };

  const isActive = id === activeId;

  return (
    <View style={styles.boxWrapper}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          pan.getLayout(),
          styles.box,
          { backgroundColor: color, zIndex: isActive ? 1 : 0 },
        ]}
      />
      <Pressable onPress={handleReset} style={styles.button}>
        <Text>{label}</Text>
      </Pressable>
    </View>
  );
};

export const Animation102Screen = () => {
  const [activeBox, setActiveBox] = useState<string | null>(null);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <DraggableBox
          id="box1"
          color="#21aaab"
          label="Volver caja 1"
          activeId={activeBox}
          setActiveId={setActiveBox}
        />
        <DraggableBox
          id="box2"
          color="#61dafb"
          label="Volver caja 2"
          activeId={activeBox}
          setActiveId={setActiveBox}
        />
        <DraggableBox
          id="box3"
          color="#61ffdf"
          label="Volver caja 3"
          activeId={activeBox}
          setActiveId={setActiveBox}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxWrapper: {
    alignItems: 'center',
    marginVertical: 40,
  },
  box: {
    width: 80,
    height: 80,
    borderRadius: 4,
    position: 'absolute',
  },
  button: {
    marginTop: 100,
    padding: 6,
    backgroundColor: '#eee',
    borderRadius: 4,
  },
});
