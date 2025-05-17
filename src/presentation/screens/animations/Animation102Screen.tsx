import React, { useRef, useState } from 'react';
import { Animated, PanResponder, StyleSheet } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { CustomView } from '../../components/ui/CustomView';
import { Button } from '../../components/ui/Button';

type BoxProps = {
  id: string;
  color: string;
  label?: string;
  activeId: string | null;
  setActiveId: (id: string | null) => void;
  springBack?: boolean;
};

const DraggableBox = ({
  id,
  color,
  label,
  activeId,
  setActiveId,
  springBack,
}: BoxProps) => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,

      onPanResponderGrant: () => {
        setActiveId(id), pan.extractOffset();
      },

      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
        useNativeDriver: false,
      }),

      onPanResponderRelease: () => {
        pan.flattenOffset();
        setActiveId(null);
        if (springBack) {
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false,
          }).start();
        }
      },
    }),
  ).current;

  const handleReset = () => {
    Animated.spring(pan, {
      toValue: { x: 0, y: 0 },
      useNativeDriver: false,
    }).start();
  };

  const isActive = id === activeId;

  return (
    <CustomView style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          pan.getLayout(),
          styles.box,
          { backgroundColor: color, zIndex: isActive ? 1 : 0 },
        ]}
      />
      {!springBack && label && (
        <Button text={label} onPress={handleReset} styles={{ marginTop: 10 }} />
      )}
    </CustomView>
  );
};

export const Animation102Screen = () => {
  const [activeBox, setActiveBox] = useState<string | null>(null);

  return (
    <CustomView style={styles.container}>
      <DraggableBox
        id="box2"
        color="#ff7675"
        activeId={activeBox}
        setActiveId={setActiveBox}
        springBack={true}
      />
      <DraggableBox
        id="box1"
        color="#0984e3"
        label="Volver caja 1"
        activeId={activeBox}
        setActiveId={setActiveBox}
        springBack={false}
      />
    </CustomView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  box: {
    width: 80,
    height: 80,
    borderRadius: 4,
  },
});
